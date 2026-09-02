import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

import type { Maker } from "@/lib/makers";

export function MakerCard({ maker }: { maker: Maker }) {
  return (
    <Link
      to="/makers/$slug"
      params={{ slug: maker.slug }}
      className="group flex flex-col bg-card transition-colors hover:bg-secondary"
    >
      <img
        src={maker.photo}
        alt={`Work by ${maker.name}`}
        width={1100}
        height={825}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-accent">
          {maker.name}
        </h3>
        {maker.hometown ? (
          <p className="mt-2 inline-flex items-center gap-1.5 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {maker.hometown}
          </p>
        ) : null}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {maker.blurb}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-accent">
          Read their story
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
