
import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { ASSOCIATIONS, FIRM, PRACTICE_AREAS } from "@/data/site";

const FOOTER_NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/our-team", label: "Our Team" },
  { to: "/practice-areas", label: "All Practice Areas" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="texture-navy text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:px-8">
        {/* Firm introduction */}
        <div>
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/60 font-display text-lg font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
              B
            </span>
            <span className="font-display text-lg font-semibold">
              Barron Law Firm <span className="text-gold">PLLC</span>
            </span>
          </Link>

          <p className="mt-5 text-sm leading-7 text-ivory/70">
            Your source for experienced legal representation. Our firm focuses
            on each client and the legal matters we handle.
          </p>

          <p className="mt-4 text-xs uppercase tracking-widest text-gold">
            Established {FIRM.established}
          </p>
        </div>

        {/* Quick navigation */}
        <div>
          <h3 className="font-display text-base font-semibold uppercase tracking-wider text-gold">
            Quick Navigation
          </h3>

          <nav aria-label="Footer navigation" className="mt-5">
            <ul className="grid grid-cols-2 gap-x-3 gap-y-4 text-sm text-ivory/75 sm:grid-cols-1">
              {FOOTER_NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Practice areas */}
        <div>
          <h3 className="font-display text-base font-semibold uppercase tracking-wider text-gold">
            Practice Areas
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-ivory/70">
            {PRACTICE_AREAS.map((area) => (
              <li key={area.slug}>
                <Link
                  to="/practice-areas/$slug"
                  params={{ slug: area.slug }}
                  className="transition-colors hover:text-gold"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact and hours */}
        <div>
          <h3 className="font-display text-base font-semibold uppercase tracking-wider text-gold">
            Contact & Hours
          </h3>

          <ul className="mt-5 space-y-4 text-sm text-ivory/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {FIRM.address.street}
                <br />
                {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}
                <br />
                {FIRM.address.country}
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={FIRM.phoneHref} className="transition-colors hover:text-gold">
                {FIRM.phone}
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={FIRM.emailHref}
                className="break-all transition-colors hover:text-gold"
              >
                {FIRM.email}
              </a>
            </li>
          </ul>

          <div className="mt-6 border-t border-ivory/10 pt-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
              Office Hours
            </p>

            <ul className="space-y-3 text-xs text-ivory/70">
              {FIRM.hours.map((h) => (
                <li
                  key={h.days}
                  className="flex items-start justify-between gap-3"
                >
                  <span className="flex items-center gap-2">
                    <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                    {h.days}
                  </span>
                  <span className="text-right text-ivory/85">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Associations */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] leading-6 text-ivory/50">
            {ASSOCIATIONS.map((a) => a.name).join(" · ")}
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-ivory/10 bg-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-ivory/50 sm:px-6 md:flex-row md:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} Barron Law Firm PLLC. All rights reserved.
          </p>
          <Link
            to="/contact"
            className="transition-colors hover:text-gold"
          >
            Contact the firm
          </Link>
        </div>
      </div>
    </footer>
  );
}
