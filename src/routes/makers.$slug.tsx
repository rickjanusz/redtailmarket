import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

import { MakerCard } from "@/components/site/MakerCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { independentMakers, makerBySlug, originLabel } from "@/lib/makers";

export const Route = createFileRoute("/makers/$slug")({
  loader: ({ params }) => {
    const maker = makerBySlug(params.slug);
    if (!maker) throw notFound();
    return maker;
  },
  head: ({ loaderData }) => {
    const m = loaderData;
    const title = m ? `${m.name} | Redtail Market` : "Maker | Redtail Market";
    return {
      meta: [
        { title },
        { name: "description", content: (m?.blurb ?? "").slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: (m?.blurb ?? "").slice(0, 200) },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: MakerDetail,
});

function MakerDetail() {
  const maker = Route.useLoaderData();
  const origin = originLabel(maker);
  const others = independentMakers
    .filter((m) => m.slug !== maker.slug)
    .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <Link
            to="/makers"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All makers
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <img
              src={maker.photo}
              alt={`Work by ${maker.name}`}
              width={1100}
              height={825}
              className="w-full border border-border object-cover"
            />

            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
                {maker.house ? "Poured in house" : "Independent maker"}
              </p>
              <h1 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
                {maker.name}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                {maker.hometown ? (
                  <p className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {maker.hometown}
                  </p>
                ) : null}
                {origin ? (
                  <p className="border border-accent px-3 py-1 text-[0.66rem] uppercase tracking-[0.18em] text-accent">
                    {origin}
                  </p>
                ) : null}
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {maker.blurb}
              </p>

              {maker.house ? (
                <Link
                  to="/shop"
                  className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ember"
                >
                  Shop the candles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <div className="mt-8 border border-border p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {maker.name}&rsquo;s pieces are on the shelves in Frankfort.
                    Online ordering for our makers isn&rsquo;t open yet — come see
                    us, or{" "}
                    <Link
                      to="/contact"
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      get in touch
                    </Link>{" "}
                    and we&rsquo;ll set something aside.
                  </p>
                </div>
              )}
            </div>
          </div>

          {others.length ? (
            <section className="mt-24 border-t border-border pt-16">
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
                Keep exploring
              </p>
              <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
                More of our makers
              </h2>
              <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                {others.map((m) => (
                  <MakerCard key={m.slug} maker={m} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
