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
