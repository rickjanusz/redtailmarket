# Red Tail Market — Square-powered storefront

Replace the Weebly site with a custom storefront that reads directly from your Square catalog, with checkout on our site so orders and inventory stay in Square.

## The key idea: variations are the products

Your Square catalog is organized so that:

- a Square **item** = a **vendor** (booth/maker)
- each **variation** under that item = one **product for sale**

Weebly/Square Online forces variations into a dropdown. This site inverts that: every variation is rendered as its own product card with its own name, price, photo, stock count, and Add to Cart button. The parent item becomes the vendor page, not a product page.

```text
Square ITEM  "Willow Creek Pottery"   ->  Vendor page /vendors/willow-creek-pottery
  VARIATION  "Blue Glaze Mug  $28"    ->  Product card + /product/<variation-id>
  VARIATION  "Serving Bowl   $65"     ->  Product card + /product/<variation-id>
```

The shop grid is a flat list of every variation across all vendors, filterable by vendor and category, so shoppers browse products — not vendor dropdowns.

## Pages

- **Home** — market intro, featured products (variations), vendor highlights, hours/location.
- **Shop** — all variations as product cards; filter by vendor, category, price; search.
- **Vendor directory** — all vendors (items) with photo and blurb.
- **Vendor page** — that vendor's story plus all their variations as products.
- **Product page** — one variation: images, price, stock, vendor link, Add to Cart.
- **Cart + Checkout** — cart drawer, then Square-hosted secure payment.
- **Visit / About / Contact** — hours, directions, become-a-vendor info.

## Vendor content

Square only holds names, prices, images and stock. Extra vendor detail (bio, hero photo, social links, "featured" flag) lives in a Supabase table keyed by the Square item ID, editable from a simple admin page. Vendors with no extra content still render fine from Square data alone.

## Square integration

- Catalog sync runs server-side with your Square access token (stored in an RLS-locked credentials schema, readable only by the service role, never exposed to the browser), pulling items, variations, images, categories and inventory counts, cached for fast pages and refreshed on a schedule plus an on-demand "Sync catalog" button.
- Checkout creates a Square **Order** with the correct variation IDs and sends the shopper to a Square-hosted payment page, so the sale, inventory decrement, and reporting land in your existing Square account with no separate payment setup.
- Sold-out variations show as sold out based on Square inventory.

## Technical notes

- TanStack Start + Tailwind; routes: `/`, `/shop`, `/vendors`, `/vendors/$slug`, `/product/$variationId`, `/cart`, `/checkout/success`, `/visit`, `/about`, `/contact`, `/admin/vendors`.
- Square Catalog API `SearchCatalogObjects` (types `ITEM`, `IMAGE`, `CATEGORY`) + `BatchRetrieveInventoryCounts`; Orders API + Checkout `CreatePaymentLink` for purchase.
- Access token and location ID stored as server secrets; all Square calls in `createServerFn` handlers.
- Lovable Cloud tables: `vendor_profiles` (square_item_id, slug, bio, booth, images, featured), `catalog_cache` (synced items/variations), `settings`. RLS: public read on published vendor content, writes admin-only via a roles table.
- Cart state client-side; server re-prices from Square at checkout so prices can't be tampered with.

## Build order

1. Design direction + home page shell.
2. Square connection + catalog sync (item→vendor, variation→product).
3. Shop grid, vendor directory, vendor and product pages.
4. Cart + Square checkout + success page.
5. Vendor profile admin, static pages, SEO, domain cutover.

## Before we start

I'll need a Square access token with Catalog Read, Inventory Read, Orders Write, and Checkout/Payment Link permissions (and your location ID) added as a secret when we reach step 2.
