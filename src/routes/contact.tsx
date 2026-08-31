import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Become a Maker | Redtail Market" },
      {
        name: "description",
        content:
          "Get in touch with Redtail Market about orders, custom work, or applying to sell your handcrafted goods with us.",
      },
      { property: "og:title", content: "Contact Redtail Market" },
      {
        property: "og:description",
        content: "Questions, custom work, or interested in becoming a maker with us?",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "mt-2 w-full border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";
const labelClass = "text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground";

function Contact() {
  return (
    <PageShell
      eyebrow="Say hello"
      title="Contact the market"
      intro="Questions about an order, custom work, or interested in becoming one of our makers? Reach out and we'll get back to you."
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_20rem]">
        <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="name">
                Name
              </label>
              <input id="name" name="name" className={fieldClass} placeholder="Your name" />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={fieldClass}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className={labelClass} htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              className={fieldClass}
              placeholder="How can we help?"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              className={fieldClass}
              placeholder="Tell us a little more…"
            />
          </div>
          <button
            type="submit"
            className="justify-self-start bg-primary px-8 py-3.5 text-[0.75rem] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-ember"
          >
            Send message
          </button>
        </form>

        <aside className="flex flex-col gap-8 border border-border bg-card p-7">
          <div>
            <MapPin className="h-5 w-5 text-accent" />
            <h2 className="mt-3 font-display text-xl text-foreground">Visit</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              3 West Nebraska Street
              <br />
              Frankfort, Illinois 60423
            </p>
          </div>
          <div>
            <Phone className="h-5 w-5 text-accent" />
            <h2 className="mt-3 font-display text-xl text-foreground">Call</h2>
            <a
              href="tel:+17089957261"
              className="mt-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              (708) 995-7261
            </a>
          </div>
          <div>
            <Mail className="h-5 w-5 text-accent" />
            <h2 className="mt-3 font-display text-xl text-foreground">Email</h2>
            <a
              href="mailto:wecanhelp@redtailmarket.com"
              className="mt-2 block break-all text-sm text-muted-foreground hover:text-foreground"
            >
              wecanhelp@redtailmarket.com
            </a>
          </div>
          <div>
            <Clock className="h-5 w-5 text-accent" />
            <h2 className="mt-3 font-display text-xl text-foreground">Hours</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Mon – Sat: 10:00 am – 6:00 pm
              <br />
              Sunday: 10:00 am – 5:00 pm
            </p>
          </div>
          <div className="border-t border-border pt-6">
            <h2 className="font-display text-xl text-foreground">Become a maker</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We're always looking for artisans working in reclaimed, distressed and
              primitive styles. Send us a note with photos of your work.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
