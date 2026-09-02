import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Hammer, MapPin, Recycle, Sparkles } from "lucide-react";

import heroImage from "@/assets/hero-market.jpg";
import { useScentProfile } from "@/hooks/use-scent-profile";
import { topSellers } from "@/lib/bumblin-bee";
import { independentMakers } from "@/lib/makers";
import makersImage from "@/assets/makers.jpg";
import { MakerCard } from "@/components/site/MakerCard";
import { ScentCard } from "@/components/site/ScentCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Redtail Market | Handcrafted Reclaimed & Primitive Decor" },
      {
        name: "description",
        content:
          "A maker market in Historic Downtown Frankfort, IL specializing in reclaimed, distressed and primitive home decor, small-batch candles and handcrafted gifts.",
      },
      { property: "og:title", content: "Redtail Market | Handcrafted Maker Market" },
      {
        property: "og:description",
        content:
          "Reclaimed, distressed and primitive decor plus handcrafted gifts from makers across the USA, in Historic Downtown Frankfort, Illinois.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Hammer,
    title: "Made by hand",
    body: "The heart of independent makers — built, poured, stitched and thrown by hand, rough edges and all.",
  },
  {
    icon: Recycle,
    title: "Reclaimed & rescued",
    body: "Barn wood, salvaged tin and old hardware get a second life as signs, shelves and primitive furnishings.",
  },
  {
    icon: Sparkles,
    title: "Distressed & primitive",
    body: "Worn finishes, muted milk paint and aged patina — the honest, lived-in look of an old farmhouse.",
  },
];

const categories = [
  { name: "Candles & Melts", note: "Hand-poured soy, small batch" },
  { name: "Reclaimed Wood Signs", note: "Salvaged barn board" },
  { name: "Reclaimed Wood Boards", note: "Hand-crafted cutting & charcuterie boards" },
  { name: "Primitive Decor", note: "Crocks, tins & aged finishes" },
  { name: "Soft Goods", note: "Embroidered & stitched by hand" },
  { name: "Pottery", note: "Wheel-thrown stoneware" },
];

function Index() {
  // Ranked by real Square sales over the last 365 days, not Shopify's "best
  // seller" tag — only 14 of the 27 tagged scents are truly top sellers. A
  // returning shopper with session history sees their own profile instead.
  // Lead with makers whose blurb names where they work — those cards read best.
  const featuredMakers = independentMakers
    .filter((m) => m.hometown)
    .slice(0, 4);

  const {
    scents: featuredScents,
    tagLabel,
    personalised,
  } = useScentProfile({ fallback: topSellers(4) });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-border">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[22rem] lg:min-h-[38rem]">
              <img
                src={heroImage}
                alt="Hand-poured soy candle and dried red berries on a reclaimed barn wood shelf"
                width={1600}
                height={1200}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/10 to-background" />
            </div>

            <div className="flex flex-col justify-center gap-6 px-6 py-16 lg:px-14 lg:py-24">
              <p className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.32em] text-accent">
                <MapPin className="h-3.5 w-3.5" />
                Historic Downtown Frankfort, Illinois
              </p>

              <h1 className="text-5xl leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
                Hand&#8209;crafted,
                <span className="mt-2 block text-primary">reclaimed</span>
                <span className="mt-2 block font-script text-4xl text-muted-foreground sm:text-5xl">
                  &amp; a little bit primitive
                </span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                Redtail Market is a curated maker market in Historic Downtown Frankfort, Illinois.
                We carry distressed decor, salvaged wood signs, small-batch candles,
                handcrafted boards and gifts from independent artisans.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/shop"
                  className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ember"
                >
                  Shop the market
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/makers"
                  className="inline-flex items-center gap-2 border border-border px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Meet our makers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-background p-8 lg:p-10">
                <pillar.icon className="h-6 w-6 text-accent" />
                <h2 className="mt-5 text-2xl text-foreground">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured grid */}
        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
                Browse categories
              </p>
              <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">What you'll find</h2>
            </div>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-accent"
            >
              View everything
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="/shop"
                className="group grain-overlay flex flex-col gap-5 bg-card p-7 transition-colors hover:bg-secondary"
              >
                <span className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                  {category.note}
                </span>
                <div className="h-44 w-full bg-secondary" />
                <span className="font-display text-2xl text-foreground transition-colors group-hover:text-accent">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* New arrivals */}
        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
                {personalised ? "Picked for you" : "Hand-poured by Bumblin Bee"}
              </p>
              <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">
                {personalised ? `More ${tagLabel} scents` : "Best-selling scents"}
              </h2>
            </div>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-accent"
            >
              Shop all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {featuredScents.map((scent) => (
              <ScentCard key={scent.handle} scent={scent} />
            ))}
          </div>
        </section>

        {/* Featured makers */}
        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
                Meet a few of them
              </p>
              <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">Featured makers</h2>
            </div>
            <Link
              to="/makers"
              className="group inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-accent"
            >
              All makers
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {featuredMakers.map((maker) => (
              <MakerCard key={maker.slug} maker={maker} />
            ))}
          </div>
        </section>

        {/* Makers band */}
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:gap-16">
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
                Our makers
              </p>
              <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">
                Real people, real workshops
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Independent makers stock most of our shelves — potters, woodworkers, candle
                pourers and paper artists from Illinois, Indiana, Wisconsin and beyond.
                Check out the makers pages to learn more about their stories.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our parent shop,{" "}
                <a
                  href="https://bumblinbee.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Bumblin Bee Candle Co.
                </a>
                , hand-pours every candle you'll find on our shelves.
              </p>
              <Link
                to="/makers"
                className="mt-8 inline-flex items-center gap-2 border border-border px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Browse the makers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Visit */}
        <section className="mx-auto max-w-7xl px-5 py-20 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
            Come see us
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl text-foreground sm:text-5xl">
            Worth the trip to Historic Downtown Frankfort
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Come wander the shelves in person and see the whole market. Our candles are
            available online, with more to follow.
          </p>
          <Link
            to="/visit"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-8 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ember"
          >
            Hours &amp; directions
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
