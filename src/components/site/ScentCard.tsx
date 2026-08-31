import { Link } from "@tanstack/react-router";

import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { img, type BumblinScent } from "@/lib/bumblin-bee";

function priceFrom(scent: BumblinScent) {
  const prices = scent.sizes
    .map((s) => Number.parseFloat(s.price))
    .filter((n) => Number.isFinite(n));
  return prices.length ? Math.min(...prices) : null;
}

export function ScentCard({ scent }: { scent: BumblinScent }) {
  const hero = scent.sizes.find((s) => s.images.length > 0)?.images[0];
  const from = priceFrom(scent);

  return (
    <Link
      to="/shop/$slug"
      params={{ slug: scent.handle }}
      className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary"
    >
      {hero ? (
        <img
          src={img(hero, 800)}
          alt={`Bumblin Bee ${scent.scent} hand-poured soy candle`}
          width={800}
          height={800}
          loading="lazy"
          className="aspect-square w-full border border-border object-cover"
        />
      ) : (
        <PlaceholderImage className="aspect-square w-full" label="Photo coming" />
      )}

      <div className="flex flex-1 flex-col">
        <p className="text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground">
          Bumblin Bee
        </p>
        <h3 className="mt-2 font-display text-xl text-foreground transition-colors group-hover:text-accent">
          {scent.scent}
        </h3>
        {scent.notes ? (
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {scent.notes}
          </p>
        ) : null}
        <p className="mt-3 text-sm text-accent">
          {from !== null ? `From $${from.toFixed(2)}` : "—"}
        </p>
      </div>
    </Link>
  );
}
