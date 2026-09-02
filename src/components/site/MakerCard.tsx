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
      {/*
        The maker photos were shot at different times under different light, so
        a grid of them straight is visually noisy. Two things settle them:
        sepia pulls them to a common temperature, and an even vignette all the
        way around. It has to be strong to register at all: the photos are dark,
        the sepia darkens them further, and the card behind is near-black, so a
        subtle vignette is simply invisible here. Hover restores colour and
        eases the vignette back so the work reads.
      */}
      <span className="relative block overflow-hidden">
        <img
          src={maker.photo}
          alt={`Work by ${maker.name}`}
          width={1100}
          height={825}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover [filter:sepia(0.7)_saturate(0.7)_contrast(1.05)_brightness(0.95)] transition-[filter] duration-700 ease-out group-hover:[filter:sepia(0)_saturate(1)_contrast(1)_brightness(1)] motion-reduce:transition-none"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-700 ease-out group-hover:opacity-70 motion-reduce:transition-none [background:radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.9)_100%)]"
        />
      </span>
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
