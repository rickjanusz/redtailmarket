<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Redtail Market

Storefront for a physical handmade-goods market, replacing an existing Weebly
site. "Redtail" is **one word** everywhere in user-facing copy.

## The business

- **Redtail Market**, 3 West Nebraska Street, Frankfort, Illinois 60423
- Phone (708) 995-7261 · wecanhelp@redtailmarket.com
- Hours: Mon–Sat 10:00 am – 6:00 pm, Sun 10:00 am – 5:00 pm
- Parent shop: Bumblin Bee Candle Co. (hand-pours the candles)
- Product mix: reclaimed / distressed / primitive decor — candles & melts,
  barn-board signs, cutting & charcuterie boards, primitive decor, soft goods,
  pottery

## Core architectural idea

Square is the source of truth for everything sellable. The catalog is organized
so that:

- a Square **ITEM** = a **maker** (booth/vendor) → maker page
- each **VARIATION** under it = **one product for sale** → its own product card

Square Online/Weebly buries variations in a dropdown. This site inverts that:
every variation renders as its own card with its own name, price, photo, stock
and Add to Cart. **This inversion is the entire reason for the rebuild** — do
not "simplify" it back into item-level products.

The site stores only what Square cannot hold: maker stories and site copy.

## Stack

TanStack Start (SSR) · React 19 · TypeScript · Tailwind v4 · shadcn/ui
(46 primitives in `src/components/ui/`) · Bun · Vite 8 with
`@lovable.dev/vite-tanstack-config`.

- File-based routing — see `src/routes/README.md`. `routeTree.gen.ts` is
  generated; regenerate with `bun run build`, never hand-edit.
- `vite.config.ts` redirects the server entry to `src/server.ts` (an SSR error
  wrapper). The Lovable config already bundles the devtools, tanstackStart,
  viteReact, tailwind, tsConfigPaths and nitro plugins — adding them manually
  breaks the app with duplicates.
- Deploy target is Cloudflare Workers via nitro.

## Design system

All colors are **oklch** and defined as semantic tokens in `src/styles.css`
(`:root` + `@theme inline`). Never hardcode a color; add a token instead.

Dark warm palette: charcoal ground `oklch(0.17 0.008 40)`, barn-red primary
`oklch(0.44 0.166 27)`, plus `ember`, `linen`, `bark` accents.
Type: Abril Fatface (display) · Cabin (sans) · Pinyon Script (script).

## Routes

`/` · `/shop` · `/shop/$slug` · `/makers` · `/makers/$slug` · `/cart` ·
`/contact` · `/visit`

Makers live at **`/makers`** (renamed from `/vendors` on 2026-08-31). Planned
but not yet built: `/checkout/success`, `/auth`, `/admin`.

## Build status

- **Phase 1 — design system & content pages: DONE**
- **Phase 2 — placeholder layouts for every page: DONE.** All pages render from
  `src/lib/placeholder-data.ts` (12 makers named "Maker Name", 12 products at
  "$00.00"). Filter chips, maker dropdown, sort and pagination are inert
  `<span>`/uncontrolled `<select>` mockups.
- **Phase 3 — Square catalog integration: NOT STARTED.** No Square or Supabase
  code, SDK or dependency exists in the repo yet.
- **Phase 4 — cart & Square hosted checkout: NOT STARTED**

### Webhooks (deferred, decided 2026-08-31)

Do NOT create a Square webhook subscription until Phase 3 has a deployed HTTPS
endpoint. There is nothing to receive one, and Square disables endpoints that
keep failing delivery. The signature key does not exist until the subscription
is created, which is why `SQUARE_WEBHOOK_SIGNATURE_KEY` is blank.

When we do add it, the events that matter are:

- `catalog.version.updated` — invalidate the cached catalog on any change
- `inventory.count.updated` — **the important one.** This is a physical market:
  stock can sell off the shelf in Frankfort while it sits in an online cart.
  Scheduled polling leaves a window where the site advertises stock that is
  gone; webhooks shrink it to seconds.

`order.*` / `payment.*` are Phase 4 and only if we need order state on-site —
Square's hosted checkout already handles the sale, the inventory decrement and
the Pirate Ship flow without them.

Sandbox and production have **separate** subscriptions with **separate**
signature keys. Flipping `SQUARE_ENVIRONMENT` means changing the signature key
too, same as the access token.
- **Phase 5 — admin panel (`/auth`, `/admin`): NOT STARTED**

Longer plan docs live in `.lovable/plan/`. Note their copy predates the
"Redtail is one word" decision and the `/vendors` → `/makers` rename.

## Square catalog reality (surveyed 2026-08-31)

The catalog is an **in-store POS inventory, not an e-commerce catalog**. Verified
against the live production account, location `LWW0PTR4PKB97` ("Bumblin Bee, LLC").

**81 items / 4,570 variations.** Findings that contradict the original plan:

1. **ITEM = maker does not hold.** Only ~60% of items are makers. The rest are
   categories (`Dried Florals` 243, `Lamps & Lighting` 150, `Home Decor 1-4`,
   `Toys & Games`, `Artisan Jewelry`), wholesale brands (`Dr. Squatch`,
   `Earth Rugs`, `Irvins Country Tinware`, `Myra Bags`, `Candle Warmers`,
   `Paine's`, `WT Collection`), or single products (`Mystery Melt`,
   `Free T-Shirt`, `Burlap Flag`).
   Several makers are split across items: Oak Hill Studio x6 (seasonal),
   Bumblin Bee x6 (jar size), Christine's Home Furnishings x3 - and those three
   use TWO different apostrophe characters, so they will not group by string
   match. Hearthside Collection x3.
   => the makers table needs a `kind` (maker/category/brand/house) so non-makers
   stay out of the directory, and a group key to merge splits. Building
   `/makers` naively from items would list "Home Decor 3" as an artisan.

2. **21 CATEGORY objects also encode maker names** (Brennans Woodworking,
   Papernickety, Ri Ri's Corner) mixed with jar sizes (4oz, 14oz, 48oz).
   Maker identity lives in two places, inconsistently.

3. **Not everything is sellable online**: 49 variations are `VARIABLE_PRICING`
   (no price), only 12 of 81 items have a description, and items carry
   `ecom_available: false`.

**Do not build the flat 4,570-product grid.** Drive the storefront from a
curated allowlist - products with a photo, a fixed price and a description.

## Product photography (surveyed 2026-08-31)

**Square holds NO product imagery.** 334 IMAGE objects exist but 0 are attached
to any item or variation (checked both `image_ids` and legacy `image_id`).
263 of those 334 are NobleWorks wholesale stock, many showing the BACK of a
card. The rest are Bumblin Bee.

**Square's images are redundant** - every scent they cover is also in iCloud, so
the image pipeline reads from iCloud only and needs no `ITEMS_WRITE` scope and
no mutation of the live catalog. This matches the project principle: Square owns
price and stock, the site owns everything Square cannot hold.

### Source of truth: iCloud
`~/Library/Mobile Documents/com~apple~CloudDocs/Documents/bumblin bee working files/`

| Folder | Supplies |
| --- | --- |
| `_website/2.7` | 3oz Wax Melt |
| `_website/4` | 4oz Mason Jar |
| `_website/7 short` | 7oz Mason Jar |
| `_website/14` | 14oz Mason Jar |
| `_website/48` | 48oz Apothecary |
| ` _ 2023 products/website product exports` | mixed, prefix decides |
| ` _ 2023 products/2023 barn` | mixed, prefix decides |
| ` _ 2023 products/14` | 14oz |
| `__ 3d /_ export renders/{3oz,4oz,8oz,14oz,48oz}` | gap-fill renders |

**Size aliases (user-confirmed):** `3` and `2.7` both mean the 3oz Wax Melt
(verified visually - melter pack, Net Wt 2.7oz/75g). `8` means the current 7oz
Mason Jar. `_website/7` is a STALE duplicate of `7 short` - exclude it.
Note the leading space in ` _ 2023 products` and the trailing space in `__ 3d `.

### Coverage: 263 of 427 Bumblin Bee variations (62%)

| Line | Covered | Missing |
| --- | --- | --- |
| 14oz | 83% | 15 |
| 3oz Melt | 72% | 24 |
| 7oz | 72% | 24 |
| 4oz | 67% | 26 |
| **48oz** | **13%** | **75** |

**48oz is 46% of the entire gap** - one shoot there is the highest-leverage
action available. Scents absent in every size are the newest ones (1776 series,
`60423`, Fallfest 2026, Queen of Hearts, The Looking Glass, Mad Tea Party),
which line up with in-progress work in `_ 2026 products` - they may not exist
yet rather than being lost.

### Image selection rules (user-decided 2026-08-31)

- **Numbered files are REVISIONS, not angles.** `48_haunting.jpg` /
  `48_haunting2.jpg` / `48_haunting3.jpg` -> keep `haunting3` ONLY. Never
  include all takes.
- Same revision in two formats (`.png` + `.jpeg`) -> keep one, prefer `.png`.
- **3D renders are SECONDARY images** behind the photograph, per scent. Where no
  photograph exists the render becomes the only image (11 variations today).
- `_seaside` suffix marks an alternate scene of the same scent, kept as its own
  secondary image. Confirm this is wanted before shipping.
- Result: 268 variations carry 293 image files (1.09 avg) - 247 with one image,
  17 with two, 4 with three or more; 19 have a render behind a photo.

### Pipeline gotchas
- Matching is by scent name agreeing between filename and Square. It MUST report
  unmatched variations rather than silently skipping them.
- Known filename typos needing an override map: `soffron`->Saffron,
  `euclyptus`->Eucalyptus, `whie cedar`->White Cedar,
  `magnolia rose`->Magnolia & Rose, `sugared pumpkin and fig`->Sugared Pumpkin Fig,
  and `boo berry` -> Square's `BOooOo...Berry`.
- Some files put the size at the END (`charmed_48oz.png`), not the start.
- **Discontinued scents (user-confirmed 2026-08-31)** - photos exist but the
  scent is no longer in the Square catalog. Expect these to match nothing; do
  NOT treat them as pipeline failures: Bourbon Street, Box of Chocolates,
  Lavender Woods, Pacific Cove, Sugar & Spice, Valor.
  Note `Lavender Woods` is discontinued and is a DIFFERENT scent from the
  current `Lavender Locks` - not a rename.
- Unexplained: a `bats` key in the 14oz set matching no variation. Every
  "Bats in the Belfry" file found lives in the melt/7oz/4oz folders.
- Filename conventions differ per folder: `melt_x`, `4oz_x`, `7oz_short_x`,
  `14_x`, `48_xnospaces2`. The `48` set strips spaces and appends take numbers.
- Strip `-Camera N` suffixes.
- **Style is not uniform.** Photographed sets are a single product on barn wood
  at 2600x2600; the 3D renders are themed scenes (e.g. three jars on a beach for
  Sea Witch) at 1200x1200. Use renders to fill gaps only, and expect a visible
  difference in a mixed grid.

## Online catalog scope (undecided as of 2026-08-31)

Two options are live. **Bumblin Bee is in every version**, so work on it is safe
regardless of which is chosen.

| Group | Items | Variations | Priced | With description |
| --- | --- | --- | --- | --- |
| House (Bumblin Bee + RedTail) | 8 | 625 | 621 | 5 |
| Wholesale brands | 14 | 772 | 767 | 0 |
| Local makers | 45 | 2,378 | 2,343 | 5 |
| Categories | 14 | 795 | 790 | 0 |

- **Option A - house + wholesale only** (~1,456 variations, ~32%). Skipping local
  makers also eliminates the entire item-is-not-a-maker mapping problem, since
  all 45 offending items are local makers.
- **Option B - everything** (4,570 variations).
- **Hybrid worth considering:** keep makers as CONTENT (stories, directory, SEO,
  in-store draw) but sell online only Bumblin Bee + permitted wholesale. Maker
  pages say "available in store" instead of carrying a cart. This preserves the
  maker-market brand the site is designed around.

### Supplier notes (user, 2026-08-31)
- **`Toys & Games` (59) is Toysmith** - a wholesale supplier, NOT a generic
  category. Reclassify it as wholesale. Only the **Neato** brand line is
  carried, so any supplier asset request should be scoped to Neato, not the
  whole Toysmith catalog.
- **`Artisan Jewelry` (34) is mixed** - several local makers PLUS wholesale.
  DEFERRED - do not build against it; revisit later.
- => Other "category-looking" items may likewise be single wholesale suppliers
  (`Dried Florals` 243, `Lamps & Lighting` 150, `Home Decor 1-4`,
  `Amish Furniture & Home Decor`, `Wholesale Home Decor`). Audit with the user
  before assuming any of them is a generic category.

### Blockers to resolve before committing to wholesale
1. **Reseller agreements** - wholesale terms often restrict online resale (MAP
   pricing, authorized-dealer clauses). Dr. Squatch is notably strict. Confirm
   per brand BEFORE building; this could invalidate the option.
2. **Wholesale imagery is not free.** The 263 NobleWorks images in Square are
   supplier stock and at least some are the BACK of the card (barcode,
   copyright) - audit front-vs-back before counting them. The other brands have
   no images in Square.
3. **Zero wholesale items have descriptions.**

## Bumblin Bee product data (built 2026-08-31)

`src/lib/bumblin-bee.ts` is **generated** - do not hand-edit. Regenerate with
`scripts/generate-bumblin-bee.py` (it reads saved Shopify GraphQL responses plus
the live Square catalog).

**Shopify is the content source; Square stays the commerce source.**

- Shopify store: `bumblinbee.com` (Bumblin Bee, LLC) - reachable via the Shopify
  MCP connector. Product = SCENT, variants = SIZE. Square is the inverse:
  item = size line, variation = scent. Join on (size, scent).
- Shopify supplies imagery (its CDN), descriptions and scent tags. Square has
  none of these.
- **Images are attached to the product, not the variant** (`variant.image` is
  null on all sizes), but the FILENAME encodes the size (`14_`, `7oz_short_`,
  `4oz_`, `melt_`, `48_`), so the generator buckets them by filename prefix.
- Shopify CDN resizes via `?width=` - `img(url, 800)` in the module.
- Images are hotlinked, NOT committed. The 293 source files are 327 MB, far too
  large for a Lovable-synced repo. Long term these belong in object storage;
  a rename or delete on Shopify breaks them here.
- **Prices in the generated file are Shopify list prices, shown only until the
  Square catalog is wired in. Square is the source of truth for price and stock**
  - Shopify tracks its own inventory that has no relation to the Frankfort shelf.
  Each size carries `squareVariationId` as the join key.

### Results
- 78 scents, 390 size rows; 264 have an image, 382 of 390 (98%) link to a Square
  variation.
- 8 scent/size combos exist on Shopify but NOT in Square - the two systems
  disagree: By the Fireside (14oz/7oz/melt), Coal Fire Farm (4oz/48oz),
  Holiday Traditions (melt), Pumpkin Chai (4oz/48oz).
- Placeholder images (`product_placeholder*`, `placeholder*`) are filtered out,
  so a few scents legitimately render the "Photo coming" state.
- Square spells it `BOooOo...Berry`, Shopify `BOoOoo...Berry` - aliased in the
  generator.

### Dev server
`bun run dev` serves on **http://localhost:8080** (port set by the Lovable vite
config), not Vite's default 5173.

### Debugging note
Rendered HTML contains NUL bytes in the TanStack hydration payload, so `grep`
treats page dumps as binary and silently reports nothing. Use `grep -a` or
parse with Python when checking SSR output.

## Recommendations & the session profile

Two layers, deliberately separated:

1. **`definingTag(scent)`** (in the generated `bumblin-bee.ts`) - the tag a page
   is "about", in strict order:
   1. exactly one season tag -> that season;
   2. several season tags -> the one `peakSeason` measures, if it is among them;
   3. otherwise the rarest tag, **season winning any tie**.
   Group members come from `scentsLike()`, which matches the same key on TAG
   membership.

   **The Shopify season tags are authoritative about what a scent IS. Sales data
   only breaks a tie between seasons a scent is ALREADY tagged with - it must
   never override or invent one.** This is the crucial rule (user-confirmed
   2026-08-31): *when* a scent sells is not *what* it is. Winter and holiday
   scents sell hard in Sept-Nov on pre-Christmas shopping, so Iced Pine - a
   winter scent, correctly tagged - measures a "fall" peak. Eight scents show
   that skew (Iced Pine, Mistletoe Kisses, Absinthe & Santal, Dragon's Breath,
   Houndstooth, Rainbow Sherbet, Top Drawer, Vanilla Latte). An earlier version
   trusted measurement over tags and put winter scents in fall lists.

   Jack O'Lantern is the case this exists for: tagged `fall` + `winter`, sales
   say fall, so it reads "More Fall scents". Its rare `Citrus / Berry` tag - the
   old rule's pick - comes from an orange-peel note, which is how Shopify tags
   work: they mark notes PRESENT, not the scent's character. Never treat a rare
   tag as the defining one without this ordering.
2. **`src/lib/scent-affinity.ts`** - session profile. Every scent opened and
   every filter chip pressed adds recency-decayed weight to its tags (an
   explicit chip counts 2.5x a passive view). `dominantTag()` breaks ties the
   SAME way as `definingTag` - season, then rarity - so the heading does not
   flip between the server render and the personalised one.

**`src/hooks/use-scent-profile.ts` is the single entry point.** Every page that
suggests scents uses it; do not re-implement the orchestration inline. It
renders the caller's `fallback` on the server AND on the first client paint
(identical markup, so no hydration mismatch), then swaps in profile-driven picks
once `signalStrength() >= minSignal` (default 3) and at least 2 candidates
survive. Used by `/` (fallback: real Square top sellers) and `/shop/$slug`
(fallback: `definingTag` group).

Storage is **sessionStorage only** - per tab, never sent anywhere, gone when the
tab closes. Every access is try/caught, so a private window simply never
personalises rather than erroring.

Scoring divides by `sqrt(tagCount)` so a scent tagged with everything cannot win
by breadth alone; ties break on real Square units sold.

## Fragrance notes drive recommendations

`noteList` on each scent is parsed in the generator from the note headline plus
the description body, against a vocabulary built from every headline note.
**131 notes, median 9 per scent, every scent covered.**

Notes are used in preference to tags because they actually discriminate: 34.6%
of scent pairs share >=2 notes, whereas the tag `Woody / Evergreen` alone covers
56 of 78 scents. `noteWeight()` is IDF-style, so sharing `lily of the valley`
(3 scents) counts far more than sharing `vanilla` (28).

Where notes appear: clickable chips on the product page (each records interest
and links to `/shop?note=x`), `?note=` filtering on the shop, and the session
profile, where they outweigh tags 2:1 in `recommend()`.

### Note vocabulary is where scent knowledge lives
Synonym and domain fixes belong in `NOTE_ALIAS` / `EXTRA_NOTES` in
`scripts/generate-bumblin-bee.py`, **never in the recommendation logic**.
Owner-supplied corrections so far (2026-08-31):

- **`frasier fir` is interchangeable with plain `fir`** and collapses into it.
  Note the shop spells it "frasier", not the usual "fraser"; both alias to
  `fir`. Alone it matched a single scent and could never drive a recommendation.
- **`balsam` is NOT merged into `fir`.** Per the owner it is a component note
  *within* the Frasier Fir fragrance oil, which is why Frosty Night carries
  both ("a fresh fir balsam core"). Merging would collapse a component into its
  parent and lose the link to Candied Heart, Heirloom and Iced Pine, which
  carry balsam without being fir scents.
- Multi-word notes must sit in `EXTRA_NOTES` and are matched longest-first, or
  "lily of the valley" degrades into "lily".

`dominantNote()` requires a note to appear on more than 3 scents before it can
head a section, so a one-off never becomes "More X scents" with nothing to show.

## Best sellers come from Square, not Shopify

`topSellers()` ranks on `unitsSold`, aggregated in the generator from COMPLETED
Square orders over the last 365 days (4,348 orders). **Do not use Shopify's
"best seller" tag** - 27 scents carry it but only 14 are in the real top 20, and
6 genuine top sellers are untagged (Witching Hour is #3, Iced Pine #9).
Frosty Night alone is 285 units / $5,122, ~14% of all units.

Square's `SearchOrders` REQUIRES a `state_filter` of closed states when sorting
on `CLOSED_AT`; omitting it returns a 400 that looks like a permissions error
but is not.

### Seasonality must be baseline-corrected
`peakSeason` is lift over the shop's OWN seasonal trade, not raw share. The
baseline is uneven - fall 30.9% of units, winter 27.2%, summer 21.9%, spring
20.1% - so raw share labels almost everything a fall scent. A season is only
called at >= 12 units and >= 1.6x lift; 43 of 78 scents qualify. Skipping the
correction produced two false "mis-tagged" findings that vanished once it was
applied.

## Square sandbox is unusable

`SQUARE_ENVIRONMENT=production` is deliberate, not an oversight: **Square's
sandbox API is broken** (owner, 2026-09-01). Do not suggest switching to
sandbox as the "safe" option - it is not available.

Consequences:

- Every Square call in this project hits the **live store**. Reads (catalog,
  inventory, orders) are harmless and are what the generator relies on.
- **Phase 4 checkout cannot be rehearsed in sandbox.** Any Orders or Payments
  write would create a real order and a real charge against the Frankfort shop.
  Before building checkout, agree an explicit guard with the owner - and never
  issue a write to Orders/Payments without their direct, specific go-ahead.
- The same applies to `ITEMS_WRITE` if attaching images to the catalogue is ever
  revisited; the current design deliberately avoids needing it.

## Brand assets are real files, not Lovable pointers

Images uploaded through Lovable do NOT arrive as files. Lovable commits a
`<name>.asset.json` manifest pointing at its own asset store via a RELATIVE url
(`/__l5e/assets-v1/...`), which resolves only on Lovable's infrastructure. Both
logo manifests 404 locally and would 404 on any self-hosted deploy, so the
header logo was a broken image everywhere except Lovable's preview.

Real files now live in `src/assets/brand/`, imported normally so Vite hashes and
bundles them:

- `redtail-wordmark.png` (961x394, RGBA) - the header lockup
- `redtail_logo.jpg` (1200x1200) - full mark: whitewashed barn board, grey
  galloping horse behind the wordmark. **Currently unused.**

The stale `.asset.json` manifests are left in `src/assets/` on purpose - Lovable
may still reference them - but nothing imports them. If any future asset arrives
as a manifest, pull the bytes down the same way, from
`https://id-preview--<project_id>.lovable.app/<url from the manifest>`.

### Known issue: the wordmark is a light-background asset
The "Market" script in the wordmark is BLACK on transparency, and the header is
near-black. `SiteHeader` compensates with a heavy white glow
(`drop-shadow-[...rgba(250,245,235,0.9)...]`). That is a workaround, not a fix -
a proper knockout/light version of the wordmark would remove the need for it.

## Secrets

`.env` (gitignored; template in `.env.example`). Server-side only.

**Never prefix a secret with `VITE_`** — the Vite config injects every `VITE_*`
var into the client bundle, which would publish the Square token to every
visitor. Read these only inside `createServerFn` handlers.

On Cloudflare Workers `process.env` is not populated the way it is in local
dev; production secrets must be set as Worker secrets/vars (and `.dev.vars` for
local `wrangler` preview).

## Gotchas

- The repo has pre-existing Prettier drift — `bun run lint` reports ~31 errors
  across 16 files, including untouched `src/components/ui/` primitives. Don't
  run a repo-wide `bun run format` as a drive-by; it buries real diffs.
- Xcode Command Line Tools are not installed on this machine, so `/usr/bin/git`
  is Apple's stub and any git command pops the installer prompt.
- `src/routes/shop.$slug.tsx` still leaks build status into shopper-facing copy
  ("Once the Square catalog is connected…"). Scrub when wiring Phase 3.
