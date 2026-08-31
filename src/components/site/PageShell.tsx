import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
