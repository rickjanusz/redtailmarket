import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl text-foreground">Redtail Market</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A hand-crafted maker market in Historic Downtown Frankfort, Illinois — reclaimed,
            distressed and primitive decor, plus small-batch gifts from artisans across
            the USA.
          </p>
        </div>

        <div>
          <h3 className="text-[0.7rem] uppercase tracking-[0.28em] text-accent">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className="hover:text-foreground">
                All goods
              </Link>
            </li>
            <li>
              <Link to="/makers" className="hover:text-foreground">
                Our makers
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-foreground">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] uppercase tracking-[0.28em] text-accent">Visit</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/visit" className="hover:text-foreground">
                Hours &amp; directions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact us
              </Link>
            </li>
            <li>
              <a
                href="https://bumblinbee.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Bumblin Bee Candle Co.
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 px-5 py-6">
        <p className="mx-auto max-w-7xl text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Redtail Market — Historic Downtown Frankfort, IL
        </p>
      </div>
    </footer>
  );
}
