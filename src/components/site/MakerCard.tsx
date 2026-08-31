import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import type { PlaceholderMaker } from "@/lib/placeholder-data";

export function MakerCard({ maker }: { maker: PlaceholderMaker }) {
  return (
    <Link
      to="/makers/$slug"
      params={{ slug: maker.slug }}
      className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary"
    >
      <PlaceholderImage className="aspect-square w-full" label="Maker photo" />
      <div>
        <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-accent">
          {maker.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{maker.craft}</p>
        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          {maker.hometown}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-accent">
          View collection
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
