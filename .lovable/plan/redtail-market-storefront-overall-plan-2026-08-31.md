# Redtail Market storefront — overall plan

Square is the source of truth for everything sellable. The site adds only what
Square can't hold: maker stories and site copy.

## Phase 1 — Design system & content pages (DONE)
- Warm black/barn-red/linen palette, Abril Fatface + Cabin typography.
- Homepage (hero, categories grid), Visit (address/hours/contact), shell routes.

## Phase 2 — Placeholder layout for all pages
- Shop: filter chips, maker dropdown, sort, 12-card product grid, pagination placeholder.
- Makers: 12 maker cards + craft/alpha filter row.
- New routes: `/shop/$slug` (product detail: image, price, qty, Add to cart, "More from this maker") and `/vendors/$slug` (maker banner, bio, product grid).
- Cart: line items + order summary card; Contact: form + store info sidebar; Visit: storefront image + gallery.
- Shared placeholder components: `ProductCard`, `MakerCard`, `PlaceholderImage`.

## Phase 3 — Square catalog integration
- You create a Square application with an access token (permissions: Catalog Read, Inventory Read, Orders Write, Payments Write).
- Token stored server-side only, in an RLS-locked credentials table readable solely by the service role.
- Server functions fetch the catalog and cache it (short cache + manual refresh); Square Items → makers, Variations → products.
- Placeholder cards from Phase 2 are swapped for live data; maker/product detail pages render real Square content.
- Extra maker metadata (bio, headshot, socials, featured flag) lives in a small `makers` table keyed by Square item ID, publicly readable, admin-writable.

## Phase 4 — Cart & checkout
- Cart state (add/remove/quantity) and Square Checkout: we create the order via Square Orders API and redirect to Square's hosted payment page — card data never touches this site. Orders sync back to Square, so Pirate Ship picks them up as usual.

## Phase 5 — Admin panel (required)

Manages everything Square cannot store. Products, prices, photos and stock stay
Square-only and are never editable here.

- Login at `/auth` (email + password), admin area at `/admin`, gated so only
  signed-in admins can reach it. Roles live in a separate `user_roles` table
  with a `has_role` security-definer function (never a flag on the profile).
- **Makers** — for each Square item: bio, headshot, hometown, craft tags,
  social links, featured toggle, display order. Rows keyed by Square item ID;
  the admin lists Square items automatically so new makers appear as soon as
  they exist in Square, ready to have their story filled in.
- **Site content** — homepage hero headline/subhead/image, category cards,
  announcement bar, About/Visit/Contact copy, store hours.
- **Events / news** — optional short posts for market events and updates.
- **Images** — upload to storage from the admin (maker headshots, hero, event
  photos); public read, admin-only write.
- Public pages read this content through public read-only queries; all writes
  require an authenticated admin, enforced by row-level security, not just by
  hiding the UI.


## Out of scope / notes
- No booth numbers. Pirate Ship handled post-checkout via Square sync (no public API).
- "Redtail" is one word everywhere.
