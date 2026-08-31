import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

import wordmarkAsset from "@/assets/redtail-wordmark.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/makers", label: "Our Makers" },
  { to: "/visit", label: "Visit" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-wood sticky top-0 z-50 border-b border-border">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-6 px-5">
        <Link
          to="/"
          className="flex h-full items-center py-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={wordmarkAsset.url}
            alt="Redtail Market"
            className="h-full w-auto object-contain drop-shadow-[0_1px_1px_rgba(250,245,235,0.9),0_0_6px_rgba(250,245,235,0.55)]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.78rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 border border-border px-4 py-2 text-[0.72rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-card px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
