import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, makers, products } from "@/lib/placeholder-data";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop Handcrafted Decor & Gifts | Redtail Market" },
      {
        name: "description",
        content:
          "Browse every handcrafted piece in the market: reclaimed wood signs, primitive decor, small-batch candles, pottery and gifts.",
      },
      { property: "og:title", content: "Shop Handcrafted Decor & Gifts | Redtail Market" },
      {
        property: "og:description",
        content: "Every maker's goods from the Redtail Market floor, available online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <PageShell
      eyebrow="The market floor"
      title="Shop every maker"
      intro="Browse handcrafted goods from our makers."
    >
      {/* Filters */}
      <div className="mt-10 flex flex-col gap-5 border-y border-border py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <span className="border border-accent px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-accent">
            All
          </span>
          {categories.map((category) => (
            <span
              key={category}
              className="cursor-pointer border border-border px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            aria-label="Filter by maker"
            className="border border-border bg-card px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground"
            defaultValue=""
          >
            <option value="">All makers</option>
            {makers.map((maker) => (
              <option key={maker.slug} value={maker.slug}>
                {maker.name} — {maker.craft}
              </option>
            ))}
          </select>
          <select
            aria-label="Sort products"
            className="border border-border bg-card px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground"
            defaultValue="new"
          >
            <option value="new">Newest</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
            <option value="az">Name: A–Z</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-px grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {["1", "2", "3"].map((page) => (
          <span
            key={page}
            className={`border px-4 py-2 text-[0.72rem] tracking-[0.16em] ${
              page === "1"
                ? "border-accent text-accent"
                : "border-border text-muted-foreground"
            }`}
          >
            {page}
          </span>
        ))}
        <span className="border border-border px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
          Next
        </span>
      </div>
    </PageShell>
  );
}
