import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { ScentCard } from "@/components/site/ScentCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { definingTag, img, scentBySlug, scentsByTag } from "@/lib/bumblin-bee";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const scent = scentBySlug(params.slug);
    if (!scent) throw notFound();
    return scent;
  },
  head: ({ loaderData }) => {
    const s = loaderData;
    const title = s ? `${s.scent} — Hand-Poured Soy Candle | Redtail Market` : "Redtail Market";
    const description = s?.notes || s?.description || "";
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 200) },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ScentDetail,
});

function ScentDetail() {
  const scent = Route.useLoaderData();
  const withImages = scent.sizes.filter((s) => s.images.length > 0);
  const [sizeKey, setSizeKey] = useState(
    (withImages[0] ?? scent.sizes[0])?.size ?? scent.sizes[0]?.size,
  );
  const [shot, setShot] = useState(0);

  const active = scent.sizes.find((s) => s.size === sizeKey) ?? scent.sizes[0];
  const gallery = active?.images ?? [];
  const hero = gallery[Math.min(shot, Math.max(gallery.length - 1, 0))];

  // Follow the shopper's intent: more of the thing they are already looking at,
  // using the scent's most distinctive tag rather than any shared one.
  const tag = definingTag(scent);
  const related = tag ? scentsByTag(tag, scent.handle, 4) : [];
  const tagLabel = tag ? tag.charAt(0).toUpperCase() + tag.slice(1) : "";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All scents
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <div>
              {hero ? (
                <img
                  src={img(hero, 1400)}
                  alt={`Bumblin Bee ${scent.scent} ${active?.label ?? ""}`}
                  width={1400}
                  height={1400}
                  className="aspect-square w-full border border-border object-cover"
                />
              ) : (
                <PlaceholderImage
                  className="aspect-square w-full"
                  label="Photo coming soon"
                />
              )}
              {gallery.length > 1 ? (
                <div className="mt-px grid grid-cols-4 gap-px bg-border">
                  {gallery.map((url, i) => (
                    <button
                      key={url}
                      type="button"
                      onClick={() => setShot(i)}
                      aria-label={`View image ${i + 1}`}
                      className={`bg-card transition-opacity hover:opacity-100 ${
                        i === shot ? "opacity-100" : "opacity-60"
                      }`}
                    >
                      <img
                        src={img(url, 300)}
                        alt=""
                        width={300}
                        height={300}
                        loading="lazy"
                        className={`aspect-square w-full object-cover ${
                          i === shot ? "border border-accent" : ""
                        }`}
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Detail */}
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
                Bumblin Bee · Hand-poured in Illinois
              </p>
              <h1 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
                {scent.scent}
              </h1>
              {scent.notes ? (
                <p className="mt-4 font-script text-2xl text-muted-foreground">
                  {scent.notes}
                </p>
              ) : null}

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {scent.description}
              </p>

              {/* Size picker */}
              <div className="mt-8">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                  Size
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {scent.sizes.map((s) => {
                    const selected = s.size === sizeKey;
                    return (
                      <button
                        key={s.size}
                        type="button"
                        onClick={() => {
                          setSizeKey(s.size);
                          setShot(0);
                        }}
                        className={`border px-4 py-3 text-left transition-colors ${
                          selected
                            ? "border-accent text-accent"
                            : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                        }`}
                      >
                        <span className="block text-[0.7rem] uppercase tracking-[0.16em]">
                          {s.label}
                        </span>
                        <span className="mt-1 block text-sm">
                          ${Number.parseFloat(s.price).toFixed(2)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="mt-6 text-3xl text-foreground">
                ${Number.parseFloat(active?.price ?? "0").toFixed(2)}
              </p>

              <button
                type="button"
                disabled
                className="mt-6 w-full cursor-not-allowed border border-border px-8 py-4 text-[0.75rem] uppercase tracking-[0.24em] text-muted-foreground sm:w-auto"
              >
                Available in store
              </button>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Online checkout is not open yet. Come see us at 3 West Nebraska Street in
                Downtown Frankfort, or{" "}
                <Link to="/contact" className="text-accent underline-offset-4 hover:underline">
                  get in touch
                </Link>{" "}
                to reserve one.
              </p>

              {scent.tags.length ? (
                <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
                  {scent.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-border px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          {related.length ? (
            <section className="mt-24">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
                    Keep exploring
                  </p>
                  <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
                    More {tagLabel} scents
                  </h2>
                </div>
                <Link
                  to="/shop"
                  search={tag ? { tag } : {}}
                  className="group inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-accent"
                >
                  Shop all {tagLabel}
                </Link>
              </div>
              <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                {related.map((s) => (
                  <ScentCard key={s.handle} scent={s} />
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
