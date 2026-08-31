import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { ProductCard } from "@/components/site/ProductCard";
import { getMaker, makers, products } from "@/lib/placeholder-data";

export const Route = createFileRoute("/makers/$slug")({
  head: () => ({
    meta: [
      { title: "Maker Profile | Redtail Market" },
      {
        name: "description",
        content:
          "The story behind one of the independent makers stocking Redtail Market, plus their full collection of handcrafted goods.",
      },
      { property: "og:title", content: "Maker Profile | Redtail Market" },
      {
        property: "og:description",
        content: "Meet the maker and browse their handcrafted collection.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MakerDetail,
});

function MakerDetail() {
  const { slug } = Route.useParams();
  const maker = getMaker(slug) ?? makers[0]!;
  const makerProducts = products.slice(0, 8);

  return (
    <PageShell eyebrow={maker.craft} title={maker.name} intro={maker.bio}>
      <p className="mt-4 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-accent">
        <MapPin className="h-3.5 w-3.5" />
        {maker.hometown}
      </p>

      <PlaceholderImage
        className="mt-10 h-64 w-full sm:h-80"
        label="Maker banner image"
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[18rem_1fr]">
        <PlaceholderImage className="aspect-square w-full" label="Maker portrait" />
        <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
          <p>{maker.bio}</p>
          <p>
            Additional maker story placeholder — this longer bio, workshop photos and
            social links are managed from the admin panel, since Square has nowhere to
            store them.
          </p>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-foreground">Their collection</h2>
        <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {makerProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
