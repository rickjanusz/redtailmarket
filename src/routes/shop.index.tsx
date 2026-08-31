import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PageShell } from "@/components/site/PageShell";
import { recordTag } from "@/lib/scent-affinity";
import { ScentCard } from "@/components/site/ScentCard";
import {
  bumblinScents,
  carriesSize,
  scentTags,
  sizeOptions,
  type BumblinSizeKey,
} from "@/lib/bumblin-bee";

export const Route = createFileRoute("/shop/")({
  validateSearch: (search: Record<string, unknown>): { tag?: string } => {
    const t = search["tag"];
    return typeof t === "string" && t ? { tag: t } : {};
  },
  head: () => ({
    meta: [
      { title: "Shop Hand-Poured Candles & Wax Melts | Redtail Market" },
      {
        name: "description",
        content:
          "Shop Bumblin Bee hand-poured soy candles and wax melts — 78 scents in mason jars, apothecary jars and melts, made in Illinois.",
      },
      {
        property: "og:title",
        content: "Shop Hand-Poured Candles & Wax Melts | Redtail Market",
      },
      {
        property: "og:description",
        content: "Hand-poured soy candles and wax melts from Bumblin Bee, our parent shop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

type Sort = "az" | "za" | "low" | "high";

function minPrice(prices: string[]) {
  const n = prices.map((p) => Number.parseFloat(p)).filter(Number.isFinite);
  return n.length ? Math.min(...n) : Number.POSITIVE_INFINITY;
}

function Shop() {
  const { tag: tagFromUrl } = Route.useSearch();
  const [tag, setTag] = useState<string | null>(tagFromUrl ?? null);
  const [size, setSize] = useState<BumblinSizeKey | null>(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("az");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = bumblinScents.filter((s) => {
      if (tag && !s.tags.includes(tag)) return false;
      // Every scent is offered in all five sizes on Shopify, so filter on what
      // Square actually carries — that is the honest "do you stock this" answer.
      if (size && !carriesSize(s, size)) return false;
      if (!q) return true;
      return (
        s.scent.toLowerCase().includes(q) ||
        s.notes.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
      );
    });

    const sorted = [...list];
    sorted.sort((a, b) => {
      if (sort === "az") return a.scent.localeCompare(b.scent);
      if (sort === "za") return b.scent.localeCompare(a.scent);
      const pick = (x: (typeof list)[number]) =>
        size
          ? [x.sizes.find((v) => v.size === size)?.price ?? ""]
          : x.sizes.map((v) => v.price);
      const pa = minPrice(pick(a));
      const pb = minPrice(pick(b));
      return sort === "low" ? pa - pb : pb - pa;
    });
    return sorted;
  }, [tag, size, query, sort]);

  return (
    <PageShell
      eyebrow="The market floor"
      title="Hand-poured candles & wax melts"
      intro="Every Bumblin Bee scent, hand-poured in Illinois and stocked on our shelves in Frankfort. Choose a mason jar, an apothecary jar or a pack of melts."
    >
      {/* Filters */}
      <div className="mt-10 flex flex-col gap-5 border-y border-border py-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground/70">
            Size
          </span>
          <button
            type="button"
            onClick={() => setSize(null)}
            className={`border px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${
              size === null
                ? "border-accent text-accent"
                : "border-border text-muted-foreground hover:border-accent hover:text-accent"
            }`}
          >
            All sizes
          </button>
          {sizeOptions.map((o) => {
            const n = bumblinScents.filter((s) => carriesSize(s, o.key)).length;
            return (
              <button
                key={o.key}
                type="button"
                onClick={() => setSize(o.key === size ? null : o.key)}
                title={`${n} scents in ${o.label}`}
                className={`border px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${
                  o.key === size
                    ? "border-accent text-accent"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {o.short}
                <span className="ml-2 opacity-50">{n}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTag(null)}
            className={`border px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${
              tag === null
                ? "border-accent text-accent"
                : "border-border text-muted-foreground hover:border-accent hover:text-accent"
            }`}
          >
            All scents
          </button>
          {scentTags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                const next = t === tag ? null : t;
                setTag(next);
                if (next) recordTag(next);
              }}
              className={`border px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${
                t === tag
                  ? "border-accent text-accent"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search scents or notes…"
            aria-label="Search scents"
            className="min-w-[14rem] flex-1 border border-border bg-card px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
          />
          <select
            aria-label="Sort scents"
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="border border-border bg-card px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground"
          >
            <option value="az">Name: A–Z</option>
            <option value="za">Name: Z–A</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
            {results.length} {results.length === 1 ? "scent" : "scents"}
          </p>
        </div>
      </div>

      {/* Grid */}
      {results.length ? (
        <div className="mt-px grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {results.map((scent) => (
            <ScentCard key={scent.handle} scent={scent} sizeKey={size} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          No scents match that search.
        </p>
      )}
    </PageShell>
  );
}
