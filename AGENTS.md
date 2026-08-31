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
- Scents with photos but no matching variation (likely discontinued): Bourbon
  Street, Box of Chocolates, Lavender Woods, Pacific Cove, Sugar & Spice,
  Valor. Unexplained: a `bats` key in the 14oz set.
- Filename conventions differ per folder: `melt_x`, `4oz_x`, `7oz_short_x`,
  `14_x`, `48_xnospaces2`. The `48` set strips spaces and appends take numbers.
- Strip `-Camera N` suffixes.
- **Style is not uniform.** Photographed sets are a single product on barn wood
  at 2600x2600; the 3D renders are themed scenes (e.g. three jars on a beach for
  Sea Witch) at 1200x1200. Use renders to fill gaps only, and expect a visible
  difference in a mixed grid.

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
