import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Car,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Stethoscope,
  TriangleAlert,
  Umbrella,
} from "lucide-react";
import heroImage from "@/assets/hero-courthouse.jpg";
import officeImage from "@/assets/office-library.jpg";
import capitolImage from "@/assets/capitol.jpg";
import { FIRM, PRACTICE_AREAS, SPECIALTIES, type PracticeArea } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { AssociationsMarquee, CTABand } from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Barron Law Firm PLLC | Personal Injury Attorneys — Little Rock, AR",
      },
      {
        name: "description",
        content:
          "Barron Law Firm PLLC in Little Rock, Arkansas — over 40 years of experience in personal injury, slip and fall, medical negligence, auto accidents and insurance claims. We don't collect unless you win.",
      },
      { property: "og:title", content: "Barron Law Firm PLLC | Personal Injury Attorneys" },
      {
        property: "og:description",
        content:
          "Over 40 years of experience fighting for the injured in Little Rock, Arkansas. Call (501) 376-7934 for a free consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ICONS: Record<PracticeArea["icon"], typeof Car> = {
  heart: HeartHandshake,
  slip: TriangleAlert,
  medical: Stethoscope,
  scale: Scale,
  car: Car,
  umbrella: Umbrella,
};

function Index() {
  return (
    <main>
      {/* ============ Hero ============ */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Courthouse columns at dusk"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-ivory">
          <div className="max-w-2xl">
            <p className="hero-enter hero-enter-1 text-xs font-bold uppercase tracking-[0.35em] text-gold">
              Established {FIRM.established} · Little Rock, Arkansas
            </p>
            <h1 className="hero-enter hero-enter-2 mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Serious injury.
              <br />
              <span className="text-gold">Serious representation.</span>
            </h1>
            <p className="hero-enter hero-enter-3 mt-6 text-lg leading-relaxed text-ivory/80">
              Barron Law Firm PLLC is your source for expert attorneys. With over 40 years
              of experience, we focus on each client to provide the best legal
              representation available after a personal injury — and we don't collect
              unless you win.
            </p>
            <div className="hero-enter hero-enter-4 mt-9 flex flex-wrap gap-4">
              <a
                href={FIRM.phoneHref}
                className="inline-flex items-center gap-2 rounded border border-gold bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-deep transition-colors hover:bg-gold-soft"
              >
                <Phone className="h-4 w-4" /> Call {FIRM.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded border border-ivory/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors hover:border-gold hover:text-gold"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Welcome / about strip ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Welcome to Barron Law Firm
            </p>
            <h2 className="gold-rule mt-3 pb-1 font-display text-3xl font-semibold md:text-4xl">
              We handle all types of personal injury cases
            </h2>
            <div className="mt-9 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We provide sound legal counsel and help you obtain the financial
                compensation you deserve after a personal injury accident. Give us a call
                today — we are by your side every step of the process.
              </p>
              <p>
                We are by your side every step of the process. We handle every type of
                personal injury case, most of which are preventable and could have been
                avoided if the responsible party had taken more care. When we take on a
                new case, we welcome you with open arms and are proud to represent you.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 font-semibold uppercase tracking-wider text-primary transition-colors hover:text-gold"
            >
              More about the firm
            </Link>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border-2 border-gold/50" />
              <img
                src={officeImage}
                alt="The firm's law library with brass scales of justice"
                width={1600}
                height={912}
                loading="lazy"
                className="relative w-full rounded object-cover shadow-xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Practice areas ============ */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal direction="right" className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              What We Do
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Our Practice Areas
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Decades of courtroom experience across every kind of injury claim.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area, i) => {
              const Icon = ICONS[area.icon];
              return (
                <Reveal key={area.slug} direction="right" delay={i * 100} as="article">
                  <Link
                    to="/practice-areas/$slug"
                    params={{ slug: area.slug }}
                    className="card-lift flex h-full flex-col rounded border border-border bg-card p-7"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-deep text-gold">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold">
                      {area.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {area.excerpt}
                    </p>
                    <span className="mt-5 text-xs font-bold uppercase tracking-widest text-gold">
                      Read more →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Why us ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="right" delay={150} className="order-last lg:order-first">
            <img
              src={capitolImage}
              alt="Arkansas State Capitol in Little Rock at sunset"
              width={1600}
              height={912}
              loading="lazy"
              className="w-full rounded object-cover shadow-xl"
            />
          </Reveal>
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Why Choose Us
            </p>
            <h2 className="gold-rule mt-3 pb-1 font-display text-3xl font-semibold md:text-4xl">
              Insurance companies are not always fair
            </h2>
            <p className="mt-9 leading-relaxed text-muted-foreground">
              Many cases settle before they ever reach a courtroom — and whether the
              amount you receive is fair is based on the skills of your attorneys. We can
              represent you the right way and get you the results you are owed.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Over 40 years of experience",
                  text: "Representing injured Arkansans since 1975 with hard work and litigation skill.",
                },
                {
                  icon: HeartHandshake,
                  title: "No fee unless you win",
                  text: "We work with you to collect — if there is no recovery, you owe us nothing.",
                },
                {
                  icon: Clock,
                  title: "Responsive, personal attention",
                  text: "A focus on each client, with legal strategies reviewed and explained at every step.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ Associations marquee ============ */}
      <div className="border-y border-border bg-secondary">
        <AssociationsMarquee />
      </div>

      {/* ============ Specialties / services ============ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <Reveal direction="right">
            <h2 className="font-display text-2xl font-semibold">Our Services</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Personal Injury Representation",
                "Attorneys",
                "Nursing Home Negligence",
                "Birth Injuries",
                "Mis-Filled Prescriptions",
                "Doctor or Hospital Negligence",
                "Product Liability Cases",
              ].map((s, i) => (
                <Reveal key={s} direction="right" delay={i * 70} as="li">
                  <span className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {s}
                  </span>
                </Reveal>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <h2 className="font-display text-2xl font-semibold">Specialties</h2>
            <ul className="mt-6 space-y-3">
              {SPECIALTIES.map((s, i) => (
                <Reveal key={s} direction="right" delay={i * 70} as="li">
                  <span className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {s}
                  </span>
                </Reveal>
              ))}
            </ul>
            <div className="mt-8 rounded border border-gold/40 bg-gold/5 p-6">
              <h3 className="font-display text-lg font-semibold">Visit our office</h3>
              <p className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {FIRM.address.street}, {FIRM.address.city}, {FIRM.address.state}{" "}
                {FIRM.address.zip}
              </p>
              <p className="mt-2 flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={FIRM.emailHref} className="hover:text-gold">
                  {FIRM.email}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABand image={heroImage} />
    </main>
  );
}
