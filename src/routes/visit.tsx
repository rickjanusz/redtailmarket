import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us in Downtown Frankfort, IL | Redtail Market" },
      {
        name: "description",
        content:
          "Hours, parking and directions to Redtail Market, a handcrafted maker market at 3 West Nebraska Street, Frankfort, Illinois.",
      },
      { property: "og:title", content: "Visit Redtail Market in Downtown Frankfort, IL" },
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
      title="Downtown Frankfort, Illinois"
      intro="Our storefront sits in the heart of historic Downtown Frankfort. Stop by to browse the market in person, or reach out by phone or email."
    >
      <PlaceholderImage className="mt-12 h-64 w-full sm:h-80" label="Storefront photo" />

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
