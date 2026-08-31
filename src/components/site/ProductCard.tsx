import { Link } from "@tanstack/react-router";

import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import type { PlaceholderProduct } from "@/lib/placeholder-data";
import { getMaker } from "@/lib/placeholder-data";

export function ProductCard({ product }: { product: PlaceholderProduct }) {
  const maker = getMaker(product.makerSlug);

  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary"
    >
      <PlaceholderImage className="aspect-square w-full" label="Product photo" />
      <div>
        <p className="text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground">
          {maker?.craft ?? product.category}
        </p>
        <h3 className="mt-2 font-display text-xl text-foreground transition-colors group-hover:text-accent">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{maker?.name}</p>
        <p className="mt-3 text-sm text-accent">{product.price}</p>
      </div>
    </Link>
  );
}
