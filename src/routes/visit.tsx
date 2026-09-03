import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us in Historic Downtown Frankfort, IL | Redtail Market" },
      {
        name: "description",
        content:
          "Hours, parking and directions to Redtail Market, a handcrafted maker market at 3 West Nebraska Street, Frankfort, Illinois.",
      },
      { property: "og:title", content: "Visit Redtail Market in Historic Downtown Frankfort, IL" },
      {
        property: "og:description",
        content: "Hours and directions to our handcrafted maker market in Frankfort, Illinois.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Visit,
});

const hours = [
  { day: "Monday", time: "10:00 am – 6:00 pm" },
  { day: "Tuesday", time: "10:00 am – 6:00 pm" },
  { day: "Wednesday", time: "10:00 am – 6:00 pm" },
  { day: "Thursday", time: "10:00 am – 6:00 pm" },
  { day: "Friday", time: "10:00 am – 6:00 pm" },
  { day: "Saturday", time: "10:00 am – 6:00 pm" },
  { day: "Sunday", time: "10:00 am – 5:00 pm" },
];

function Visit() {
  return (
    <PageShell
      eyebrow="Come see us"
      title="Historic Downtown Frankfort, Illinois"
      intro="Our storefront sits in the heart of Historic Downtown Frankfort. Stop by to browse the market in person, or reach out by phone or email."
    >
      <StoreView />

      <div className="mt-px grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        <a
          href="https://maps.google.com/?q=3+West+Nebraska+Street+Frankfort+IL+60423"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-secondary"
        >
          <MapPin className="h-6 w-6 text-accent" />
          <div>
            <h2 className="font-display text-xl text-foreground">Address</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Redtail Market
              <br />
              3 West Nebraska Street
              <br />
              Frankfort, Illinois 60423
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.2em] text-accent transition-colors group-hover:text-foreground">
              Get directions
            </span>
          </div>
        </a>

        <div className="flex flex-col gap-4 bg-card p-8">
          <Phone className="h-6 w-6 text-accent" />
          <div>
            <h2 className="font-display text-xl text-foreground">Phone</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <a href="tel:+17089957261" className="hover:text-foreground">
                (708) 995-7261
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-card p-8">
          <Mail className="h-6 w-6 text-accent" />
          <div>
            <h2 className="font-display text-xl text-foreground">Email</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <a href="mailto:wecanhelp@redtailmarket.com" className="hover:text-foreground">
                wecanhelp@redtailmarket.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-card p-8 sm:col-span-2 lg:col-span-3">
          <Clock className="h-6 w-6 text-accent" />
          <div>
            <h2 className="font-display text-xl text-foreground">Hours</h2>
            <dl className="mt-4 grid max-w-md gap-2 text-sm text-muted-foreground">
              {hours.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex justify-between border-b border-border pb-2 last:border-0"
                >
                  <dt className="text-foreground">{day}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-foreground">Inside the market</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <PlaceholderImage key={i} className="aspect-[4/3] w-full" label="Store photo" />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

const STORE_VIEWS = [
  {
    id: "street",
    label: "Street view",
    title:
      "Street View of Redtail Market at 3 West Nebraska Street, Frankfort, Illinois",
    // Keyless embed — no API key to manage, no billing account tied to the site.
    //
    // Pinned by PANORAMA ID rather than coordinates. Geocoding the address let
    // Google snap to whichever panorama was nearest, which landed across the
    // street at 4 W Nebraska; nudging the coordinate just walked it round onto
    // White St. The pano id is exact and cannot drift.
    //
    // panoid + heading came from the Street View URL for the shopfront:
    //   .../@41.4977295,-87.8493394,0a,73.7y,4.06h,90t/data=!3m4!1e1!3m2!1s65rbQtVneKTZNgJ7hevxow!2e0
    // cbp is [maptype],heading,[.],pitch,zoom — 4.06 frames the storefront,
    // and the trailing 1 is one zoom level in (0 is the widest).
    //
    // Left unstyled on purpose: Google's terms restrict altering the appearance,
    // so no dark-mode filter.
    src: "https://maps.google.com/maps?q=&layer=c&panoid=65rbQtVneKTZNgJ7hevxow&cbp=11,4.06,0,0,1&output=svembed",
  },
  {
    id: "map",
    label: "Map",
    title: "Map showing Redtail Market at 3 West Nebraska Street, Frankfort, Illinois",
    src: "https://www.google.com/maps?q=3+West+Nebraska+Street,+Frankfort,+IL+60423&output=embed",
  },
] as const;

function StoreView() {
  const [active, setActive] = useState<(typeof STORE_VIEWS)[number]["id"]>("street");
  // Mount a panel's iframe only once it has been opened, then keep it mounted —
  // one network load per tab, and switching back does not reload it.
  const [seen, setSeen] = useState<string[]>(["street"]);

  function open(id: (typeof STORE_VIEWS)[number]["id"]) {
    setActive(id);
    setSeen((s) => (s.includes(id) ? s : [...s, id]));
  }

  return (
    <div className="mt-12">
      <div role="tablist" aria-label="View the storefront" className="flex gap-2">
        {STORE_VIEWS.map((v, i) => (
          <button
            key={v.id}
            role="tab"
            id={`storeview-tab-${v.id}`}
            aria-selected={active === v.id}
            aria-controls={`storeview-panel-${v.id}`}
            tabIndex={active === v.id ? 0 : -1}
            onClick={() => open(v.id)}
            onKeyDown={(e) => {
              if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
              e.preventDefault();
              const next =
                STORE_VIEWS[
                  (i + (e.key === "ArrowRight" ? 1 : STORE_VIEWS.length - 1)) %
                    STORE_VIEWS.length
                ]!;
              open(next.id);
              document.getElementById(`storeview-tab-${next.id}`)?.focus();
            }}
            className={`border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${
              active === v.id
                ? "border-accent text-accent"
                : "border-border text-muted-foreground hover:border-accent hover:text-accent"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {STORE_VIEWS.map((v) => (
        <div
          key={v.id}
          role="tabpanel"
          id={`storeview-panel-${v.id}`}
          aria-labelledby={`storeview-tab-${v.id}`}
          hidden={active !== v.id}
          className="mt-3"
        >
          {seen.includes(v.id) ? (
            <iframe
              title={v.title}
              src={v.src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border border-border sm:h-[28rem]"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
