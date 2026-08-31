# Content cleanup: remove placeholder claims, fix categories, add visit details

## Problem
The current homepage and placeholder routes contain copy that exposes internal build status ("Catalog connection comes next"), makes unsupported claims ("everything you see in store is available here", "no mass-produced filler"), and lists products the market does not sell (freeze-dried candy).

## What we will change

### 1. Homepage (`src/routes/index.tsx`)
- Rewrite the hero paragraph to remove "everything you see in store is available here." Use a neutral, handcrafted-market description.
- Rewrite the "Made by hand" pillar to remove "no mass-produced filler on our shelves." Keep the real-maker angle without the negative claim.
- Update the featured categories grid:
  - Remove **"Gifts & Sweets" / "Freeze-dried candy & more"**.
  - Add **"Reclaimed Wood Boards"** with note **"Hand-crafted cutting & charcuterie boards"**.
- Keep the Bumblin Bee parent-company reference (user approved earlier).
- Soften the "Roughly fifty" maker claim to something like "Dozens of independent artisans."

### 2. Shop placeholder (`src/routes/shop.tsx`)
- Replace the intro "Products are pulled straight from our Square catalog — each maker's individual pieces listed on their own, not buried in a dropdown. Catalog connection comes next." with a simple, shopper-facing description such as "Browse handcrafted goods from our makers."

### 3. Vendors placeholder (`src/routes/vendors.tsx`)
- Replace "once the Square catalog is connected" with neutral copy such as "Each maker has their own page with their story and collection."

### 4. Visit page (`src/routes/visit.tsx`)
- Replace placeholder intro with the confirmed location, contact info, hours, and a "Get directions" link to Google Maps.
- Address: 3 West Nebraska Street, Frankfort, Illinois 60423
- Phone: (708) 995-7261
- Email: wecanhelp@redtailmarket.com
- Hours: Mon–Sat 10:00 am – 6:00 pm, Sun 10:00 am – 5:00 pm

### 5. Contact and Cart placeholders
- Remove internal timeline language: "A contact form lands here next" and "Checkout runs through Square once the catalog is wired up."
- Replace with final public-facing copy.

## Proposed new homepage categories list
- Candles & Melts — Hand-poured soy, small batch
- Reclaimed Wood Signs — Salvaged barn board
- Reclaimed Wood Boards — Hand-crafted cutting & charcuterie boards
- Primitive Decor — Crocks, tins & aged finishes
- Soft Goods — Embroidered & stitched by hand
- Pottery — Wheel-thrown stoneware

## Proposed new homepage hero paragraph
"Red Tail Market is a curated maker market in Downtown Frankfort, Illinois. We carry distressed decor, salvaged wood signs, small-batch candles, handcrafted boards and gifts from independent artisans."

## Notes
- No backend or Square integration work in this pass; this is strictly public-facing copy and categories.
- Visit page now uses the real hours, address, phone, and email provided by the user.

