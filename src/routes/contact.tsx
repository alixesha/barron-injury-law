import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FIRM } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact | Barron Law Firm PLLC — Little Rock, AR",
      },
      {
        name: "description",
        content:
          "Contact Barron Law Firm PLLC: 1012 W. 2nd Street, Little Rock, AR 72201-2002. Call (501) 376-7934 or email jay@jwbarronlaw.com. Open Monday–Friday, 8:30 am–5:00 pm.",
      },
      { property: "og:title", content: "Contact | Barron Law Firm PLLC" },
      {
        property: "og:description",
        content:
          "1012 W. 2nd Street, Little Rock, AR 72201-2002 · (501) 376-7934 · Open Mon–Fri 8:30 am–5:00 pm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

export function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        title="Contact the Firm"
        intro="Call the attorney today for a free, confidential consultation. We welcome you with open arms and are proud to represent you."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="space-y-7">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-deep text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold">Office</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {FIRM.address.street}
                    <br />
                    {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}
                    <br />
                    {FIRM.address.country}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-deep text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold">Phone</h2>
                  <a
                    href={FIRM.phoneHref}
                    className="mt-1 block text-sm font-semibold text-muted-foreground transition-colors hover:text-gold"
                  >
                    {FIRM.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-deep text-gold">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold">Email</h2>
                  <a
                    href={FIRM.emailHref}
                    className="mt-1 block break-all text-sm font-semibold text-muted-foreground transition-colors hover:text-gold"
                  >
                    {FIRM.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-deep text-gold">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <h2 className="font-display text-lg font-semibold">Business Hours</h2>
                  <ul className="mt-2 w-full space-y-1.5 text-sm text-muted-foreground">
                    {FIRM.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-6">
                        <span>{h.days}</span>
                        <span className="font-medium text-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150} className="lg:col-span-3">
            <div className="h-full min-h-[420px] overflow-hidden rounded border border-border shadow-lg">
              <iframe
                title="Map to Barron Law Firm PLLC, 1012 W. 2nd Street, Little Rock, AR"
                src="https://maps.google.com/maps?q=1012%20W.%202nd%20Street%2C%20Little%20Rock%2C%20AR%2072201&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="texture-navy py-16 text-center text-ivory">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal direction="right">
            <h2 className="font-display text-3xl font-semibold">
              Injured? Time matters in your case.
            </h2>
            <p className="mt-4 text-ivory/75">
              Evidence disappears and deadlines pass. Call now and put over 40 years of
              experience to work for you.
            </p>
            <a
              href={FIRM.phoneHref}
              className="mt-8 inline-flex items-center gap-2 rounded border border-gold bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-deep transition-colors hover:bg-gold-soft"
            >
              <Phone className="h-4 w-4" /> Call {FIRM.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
