import { Link, createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { ProductCard } from "@/components/site/ProductCard";
import { getMaker, getProduct, products } from "@/lib/placeholder-data";

export const Route = createFileRoute("/shop/$slug")({
  head: () => ({
    meta: [
      { title: "Handcrafted Piece | Redtail Market" },
      {
        name: "description",
        content:
          "Details, pricing and maker information for a handcrafted piece available at Redtail Market in Frankfort, Illinois.",
      },
      { property: "og:title", content: "Handcrafted Piece | Redtail Market" },
      {
        property: "og:description",
        content: "A handcrafted piece from an independent maker at Redtail Market.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = getProduct(slug) ?? products[0]!;
  const maker = getMaker(product.makerSlug);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <PageShell
      eyebrow={product.category}
      title={product.name}
      intro="Product description placeholder — materials, dimensions and care details will appear here once the catalog is connected."
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <PlaceholderImage className="aspect-square w-full" label="Main photo" />
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <PlaceholderImage key={i} className="aspect-square w-full" />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-display text-3xl text-foreground">{product.name}</h2>
            {maker ? (
              <Link
                to="/makers/$slug"
                params={{ slug: maker.slug }}
                className="mt-2 inline-block text-sm text-accent underline-offset-4 hover:underline"
              >
                by {maker.name}
              </Link>
            ) : null}
            <p className="mt-4 text-2xl text-foreground">{product.price}</p>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Placeholder copy for this piece. Once the Square catalog is connected, the
            description, price, photos and availability will come straight from Square.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center border border-border">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="px-3 py-3 text-muted-foreground transition-colors hover:text-accent"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm text-foreground">1</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="px-3 py-3 text-muted-foreground transition-colors hover:text-accent"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 bg-primary px-8 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ember"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to cart
            </button>
          </div>

          <dl className="grid gap-2 border-t border-border pt-6 text-sm text-muted-foreground">
            {[
              ["Materials", "Placeholder"],
              ["Dimensions", "Placeholder"],
              ["Ships from", "Frankfort, Illinois"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-border pb-2">
                <dt className="text-foreground">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-3xl text-foreground">More from this maker</h2>
        <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
