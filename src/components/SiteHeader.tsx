
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { FIRM } from "@/data/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/about", label: "About" },
  { to: "/our-team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-navy-deep text-ivory/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs tracking-wide">
          <p className="font-medium uppercase">
            Established {FIRM.established} · Little Rock, Arkansas
          </p>

          <div className="flex items-center gap-5">
            <span>Mon – Fri · 8:30 am – 5:00 pm</span>
            <a
              href={FIRM.phoneHref}
              className="font-semibold text-gold hover:text-gold-soft"
            >
              {FIRM.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="texture-navy text-ivory shadow-lg shadow-navy-deep/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 font-display text-lg font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
              B
            </span>

            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-wide sm:text-xl">
                Barron Law Firm <span className="text-gold">PLLC</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-ivory/60">
                Personal Injury · Little Rock, AR
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative rounded px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors xl:px-4 xl:text-sm xl:tracking-widest",
                    active ? "text-gold" : "text-ivory/80 hover:text-gold",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 bottom-0.5 h-0.5 origin-left bg-gold transition-transform duration-300 xl:inset-x-4",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}

            <a
              href={FIRM.phoneHref}
              className="ml-2 inline-flex items-center gap-2 rounded border border-gold bg-gold px-3 py-2 text-xs font-bold uppercase tracking-wider text-navy-deep transition-colors hover:bg-gold-soft xl:ml-4 xl:px-4 xl:text-sm"
            >
              <Phone className="h-4 w-4" />
              {FIRM.phone}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded border border-ivory/20 p-2 text-ivory lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        <div
          className={cn(
            "overflow-hidden border-t border-ivory/10 bg-navy-deep transition-[max-height,opacity] duration-300 lg:hidden",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="flex flex-col px-6 py-3">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "border-b border-ivory/10 py-3 text-sm font-semibold uppercase tracking-widest last:border-0 transition-colors",
                    active ? "text-gold" : "text-ivory/85 hover:text-gold",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href={FIRM.phoneHref}
              className="my-3 inline-flex items-center justify-center gap-2 rounded border border-gold bg-gold px-4 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep"
            >
              <Phone className="h-4 w-4" />
              Call {FIRM.phone}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
