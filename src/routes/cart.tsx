import { Link, createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { products } from "@/lib/placeholder-data";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Redtail Market" },
      {
        name: "description",
        content: "Review the handcrafted goods in your Redtail Market cart before checkout.",
      },
      { property: "og:title", content: "Your Cart | Redtail Market" },
      {
        property: "og:description",
        content: "Review your handcrafted goods before checking out.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cart,
});

function Cart() {
  const lines = products.slice(0, 3);

  return (
    <PageShell
      eyebrow="Your basket"
      title="Cart"
      intro="Review your pieces before heading to checkout. Payment is handled securely by Square."
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <div className="divide-y divide-border border-y border-border">
          {lines.map((line) => (
            <div key={line.slug} className="flex gap-5 py-6">
              <PlaceholderImage className="h-24 w-24 shrink-0" />
              <div className="flex flex-1 flex-col gap-2">
                <Link
                  to="/shop/$slug"
                  params={{ slug: line.slug }}
                  className="font-display text-lg text-foreground hover:text-accent"
                >
                  {line.name}
                </Link>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {line.category}
                </p>
                <div className="mt-2 flex items-center border border-border self-start">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    className="px-2.5 py-2 text-muted-foreground hover:text-accent"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="min-w-8 text-center text-sm text-foreground">1</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    className="px-2.5 py-2 text-muted-foreground hover:text-accent"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button
                  type="button"
                  aria-label="Remove item"
                  className="text-muted-foreground hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
                <span className="text-sm text-foreground">{line.price}</span>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit border border-border bg-card p-7">
          <h2 className="font-display text-2xl text-foreground">Order summary</h2>
          <dl className="mt-6 grid gap-3 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="text-foreground">$00.00</dd>
            </div>
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd>Calculated at checkout</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base">
              <dt className="text-foreground">Estimated total</dt>
              <dd className="text-foreground">$00.00</dd>
            </div>
          </dl>
          <button
            type="button"
            className="mt-7 w-full bg-primary px-6 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ember"
          >
            Checkout
          </button>
          <Link
            to="/shop"
            className="mt-3 block text-center text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent"
          >
            Keep shopping
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}
