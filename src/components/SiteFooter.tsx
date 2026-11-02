import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ASSOCIATIONS, FIRM, PRACTICE_AREAS } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="texture-navy text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 font-display text-lg font-bold text-gold">
              B
            </span>
            <span className="font-display text-lg font-semibold">
              Barron Law Firm <span className="text-gold">PLLC</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ivory/70">
            Your source for expert attorneys. Over four decades of experience, a focus on
            each client, and the best legal representation available after a serious
            injury.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-gold">
            Established {FIRM.established}
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold uppercase tracking-wider text-gold">
            Practice Areas
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/70">
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

        <div>
          <h3 className="font-display text-base font-semibold uppercase tracking-wider text-gold">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ivory/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {FIRM.address.street}
                <br />
                {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}
                <br />
                {FIRM.address.country}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={FIRM.phoneHref} className="hover:text-gold">
                {FIRM.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={FIRM.emailHref} className="break-all hover:text-gold">
                {FIRM.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold uppercase tracking-wider text-gold">
            Office Hours
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ivory/70">
            {FIRM.hours.map((h) => (
              <li key={h.days} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" />
                  {h.days}
                </span>
                <span className="text-ivory/85">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-ivory/50">
            Attorneys are proud to represent you. Call the attorney today for a free
            consultation.
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-ivory/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} Barron Law Firm PLLC. All rights reserved.
          </p>
          <p className="max-w-xl text-center md:text-right">
            Member: {ASSOCIATIONS.map((a) => a.name).join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
