import { createFileRoute } from "@tanstack/react-router";

import { MakerCard } from "@/components/site/MakerCard";
import { PageShell } from "@/components/site/PageShell";
import { categories, makers } from "@/lib/placeholder-data";

export const Route = createFileRoute("/makers/")({
  head: () => ({
    meta: [
      { title: "Our Makers | Redtail Market" },
      {
        name: "description",
        content:
          "Meet the independent artisans behind Redtail Market — candle pourers, woodworkers, potters and stitchers from across the USA.",
      },
      { property: "og:title", content: "Our Makers | Redtail Market" },
      {
        property: "og:description",
        content: "The independent artisans who stock the shelves at Redtail Market.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Vendors,
});

function Vendors() {
  return (
    <PageShell
      eyebrow="Our makers"
      title="The hands behind the market"
      intro="Dozens of independent makers stock Redtail Market. Each has their own page with their story and full collection."
    >
      <div className="mt-10 flex flex-wrap gap-2 border-y border-border py-5">
        <span className="border border-accent px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-accent">
          All crafts
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

      <div className="mt-px grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {makers.map((maker) => (
          <MakerCard key={maker.slug} maker={maker} />
        ))}
      </div>
    </PageShell>
  );
}
