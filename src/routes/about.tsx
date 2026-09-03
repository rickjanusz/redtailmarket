import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import makersImage from "@/assets/makers.jpg";
import storefront from "@/assets/hero-market.jpg";

/**
 * The market's own story.
 *
 * Every sentence of body copy here is the owner's, lifted verbatim from
 * bumblinbee.com/pages/about-us and re-sequenced for the Redtail context —
 * the market's side of the story rather than the candle company's. Nothing is
 * invented. Edit freely; do not "improve" the voice.
 */

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Redtail Market" },
      {
        name: "description",
        content:
          "How Redtail Market became home: the first shop to stock Bumblin Bee candles, and now our headquarters and a home for local makers in Historic Downtown Frankfort, Illinois.",
      },
      { property: "og:title", content: "Our Story | Redtail Market" },
      {
        property: "og:description",
        content:
          "The first store to say yes to Bumblin Bee is now our headquarters, our retail counter, and home to local makers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

/**
 * Owner's words, verbatim.
 *
 * Deliberately no in-chapter photography. Only two of the founding photos on
 * bumblinbee.com are clean shots — the rest are 1125px iPhone screenshots of
 * Instagram stories with captions burned in — and two illustrated chapters out
 * of five reads as an accident rather than a choice. The copy carries it.
 */
const chapters: {
  stage: string;
  eyebrow: string;
  title: string;
  body: string[];
}[] = [
  {
    stage: "2021",
    eyebrow: "Where it started",
    title: "Late-night pours in the kitchen",
    body: [
      "We didn't start with fragrance trends or mood boards. We started with life: lilacs in spring, open windows, and an old home restored a little at a time.",
      "Late-night pours in the kitchen. Wax cooling on the counters. Fragrance oils spread across every available surface while we tried to figure out what this could become. Most of it was instinct back then.",
    ],
  },
  {
    stage: "Month 2",
    eyebrow: "The first scents",
    title: "We couldn't build a collection from scents everyone already knew",
    body: [
      "Custom blending started not long after. We knew we couldn't build a collection entirely from scents everyone already knew. The first was Witching Hour.",
      "Over time it evolved — first into Cabin in the Woods, then back again, rebuilt with a veil of smoke to feel darker, warmer, a little more atmospheric. Like something simmering slowly just out of sight.",
    ],
  },
  {
    stage: "Month 7",
    eyebrow: "The first yes",
    title: "Redtail Market in Frankfort, Illinois",
    body: [
      "We loaded them into the car and immediately started driving shop to shop, convinced every store would understand the vision the second they held one — they didn't all get it.",
      "Still hard to believe that happened the very first day we went out with the new catalogs — literally hours after picking them up from the printer. One of those moments where everything suddenly felt real.",
    ],
  },
  {
    stage: "Month 13",
    eyebrow: "Coming home",
    title: "Our first store, now our HQ",
    body: [
      "We had never done a craft show before, and it just so happened one of the largest fall festivals in the country takes place right outside Redtail Market. And not long after the weekend ended, conversations started about eventually buying Redtail itself.",
      "Apparently life takes you in the direction you were meant to go. Our first store as a candle maker selling candles and now it's our HQ, our home.",
    ],
  },
  {
    stage: "24 Months",
    eyebrow: "The decision",
    title: "Keeping it small. Keeping it personal.",
    body: [
      "After the first year of owning the store, one thing became very clear during the holiday season: we couldn't do everything. The pace, the volume, the logistics of wholesale at scale — it stopped making sense for the kind of company we wanted to be.",
      "So we made the decision to stay smaller, more intentional, and closer to the customer experience that built Bumblin Bee in the first place.",
    ],
  },
];

function About() {
  return (
    <PageShell
      eyebrow="Our story"
      title="Built through intention. Shaped by life."
      intro="Unexpected. Welcome. Ours."
    >
      <img
        src={storefront}
        alt="Hand-poured candle and dried berries on a reclaimed wood shelf"
        width={1600}
        height={1200}
        className="mt-12 h-72 w-full border border-border object-cover sm:h-96"
      />

      {/*
        A chronological spine rather than the polaroid-pile timeline used on
        bumblinbee.com. Same idea — the story is sequential — but expressed in
        this site's own language: a hard rule, square nodes, uppercase markers.
        The stages are the owner's own from that timeline.
      */}
      <div className="relative mt-20 flex flex-col gap-20 border-l border-border pl-8 sm:pl-14">
        {chapters.map((c) => (
          <section
            key={c.title}
            className="relative grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16"
          >
            {/* Node sitting on the rule. Square, to match the site's hard edges. */}
            <span
              aria-hidden="true"
              className="absolute top-[0.45rem] -left-8 h-2 w-2 -translate-x-1/2 bg-accent sm:-left-14"
            />
            <div>
              <p className="font-display text-lg text-muted-foreground/60">{c.stage}</p>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.32em] text-accent">
                {c.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
                {c.title}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {c.body.map((p) => (
                <p key={p.slice(0, 40)} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* The line that ties the whole thing to the makers. */}
      <section className="mt-24 grid items-center gap-10 border-y border-border py-16 lg:grid-cols-2 lg:gap-16">
        <img
          src={makersImage}
          alt="A maker sanding a distressed reclaimed wood sign in a workshop"
          width={1200}
          height={912}
          loading="lazy"
          className="w-full border border-border object-cover"
        />
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
            Why the makers
          </p>
          <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
            The shelf we wished we&rsquo;d had
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Our headquarters, our retail counter, and home to the local makers we
            wished had been stocked beside us when we started.
          </p>
          <Link
            to="/makers"
            className="mt-8 inline-flex items-center gap-2 border border-border px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Meet our makers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mt-20 text-center">
        <p className="mx-auto max-w-2xl font-script text-3xl leading-snug text-muted-foreground">
          A home isn&rsquo;t defined by its architectural character. It&rsquo;s defined
          by the life inside it.
        </p>
        <Link
          to="/visit"
          className="mt-10 inline-flex items-center gap-2 bg-primary px-8 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ember"
        >
          Come see us in Frankfort
        </Link>
      </section>
    </PageShell>
  );
}
