import { createFileRoute } from "@tanstack/react-router";

import { MakerCard } from "@/components/site/MakerCard";
import { PageShell } from "@/components/site/PageShell";
import { becomeAMaker, independentMakers, makers } from "@/lib/makers";

export const Route = createFileRoute("/makers/")({
  head: () => ({
    meta: [
      { title: "Our Makers | Redtail Market" },
      {
        name: "description",
        content:
          "Meet the independent artisans behind Redtail Market — potters, woodworkers, candle pourers, paper artists and more, from Illinois, Indiana, Wisconsin and beyond.",
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
  component: Makers,
});

function Makers() {
  const house = makers.filter((m) => m.house);

  return (
    <PageShell
      eyebrow="Our makers"
      title="The hands behind the market"
      intro="Every shelf in Frankfort is stocked by someone who made what's on it. Here are their stories."
    >
      <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {independentMakers.map((maker) => (
          <MakerCard key={maker.slug} maker={maker} />
        ))}
      </div>

      {/* Our own brand sits apart from the independents rather than being
          quietly listed among them. */}
      {house.length ? (
        <section className="mt-20">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
            Poured in house
          </p>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">Our own shelf</h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {house.map((maker) => (
              <MakerCard key={maker.slug} maker={maker} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Become-a-vendor callout, carried over from the old site. */}
      <section className="mt-20 grid items-center gap-10 border-t border-border pt-16 lg:grid-cols-2 lg:gap-16">
        <img
          src={becomeAMaker.photo}
          alt="Handmade goods on the shelves at Redtail Market"
          width={1100}
          height={1467}
          loading="lazy"
          className="w-full border border-border object-cover"
        />
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
            Join the market
          </p>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            {becomeAMaker.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {becomeAMaker.body}
          </p>
          <a
            href="mailto:wecanhelp@redtailmarket.com?subject=Becoming%20a%20maker%20at%20Redtail%20Market"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ember"
          >
            Get in touch
          </a>
        </div>
      </section>
    </PageShell>
  );
}
