
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  Car,
  CheckCircle2,
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
import {
  FIRM,
  PRACTICE_AREAS,
  SPECIALTIES,
  type PracticeArea,
} from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { AssociationsMarquee, CTABand } from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Barron Law Firm PLLC | Personal Injury Attorneys in Little Rock, AR",
      },
      {
        name: "description",
        content:
          "Contact Barron Law Firm PLLC in Little Rock, Arkansas, to discuss personal injury, auto accidents, slip and fall, medical negligence and liability claims.",
      },
      {
        property: "og:title",
        content: "Barron Law Firm PLLC | Little Rock, Arkansas",
      },
      {
        property: "og:description",
        content:
          "Personal injury legal representation in Little Rock, Arkansas. Call (501) 376-7934 to discuss your legal options.",
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-9 bg-gold" />
      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
        {children}
      </p>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative isolate flex min-h-[690px] items-center overflow-hidden bg-navy-deep text-ivory md:min-h-[760px]">
        <img
          src={heroImage}
          alt="Courthouse architecture representing the legal profession"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-20 bg-[#0b1525]/80" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#0b1525] via-[#0b1525]/90 to-[#0b1525]/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1525]/80 via-transparent to-[#0b1525]/20" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-20 -z-10 h-[400px] w-[400px] rounded-full border border-gold/15 md:h-[600px] md:w-[600px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-36 -z-10 h-[300px] w-[300px] rounded-full border border-gold/10 md:h-[470px] md:w-[470px]"
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-24 md:px-8 md:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div className="max-w-3xl">
            <div className="hero-enter hero-enter-1 inline-flex items-center gap-3 border border-gold/30 bg-black/20 px-4 py-3 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ead6a9]">
                Serving Little Rock, Arkansas
              </span>
            </div>

            <p className="hero-enter hero-enter-1 mt-8 text-xs font-medium uppercase tracking-[0.25em] text-white/65">
              Established {FIRM.established}
            </p>

            <h1 className="hero-enter hero-enter-2 mt-4 font-display text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl xl:text-[82px]">
              Serious injury.
              <span className="mt-2 block italic text-gold">
                Serious representation.
              </span>
            </h1>

            <div className="hero-enter hero-enter-3 mt-7 h-px w-24 bg-gold" />

            <p className="hero-enter hero-enter-3 mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              When an injury changes your life, understanding your legal options
              matters. Barron Law Firm PLLC provides personal injury representation
              with a focus on individual attention and your specific circumstances.
            </p>

            <div className="hero-enter hero-enter-4 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={FIRM.phoneHref}
                className="group inline-flex min-h-14 items-center justify-center gap-3 border border-gold bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-navy-deep transition-all duration-300 hover:border-[#ead6a9] hover:bg-[#ead6a9]"
              >
                <Phone className="h-4 w-4" />
                Call {FIRM.phone}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/40 bg-white/[0.04] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Request a Consultation
                <ArrowDownRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/65">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                Little Rock, Arkansas
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                Mon–Fri, 8:30 AM–5 PM
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-5 border border-gold/30" />
            <div className="absolute -right-3 -top-3 h-20 w-20 border-r border-t border-gold" />

            <div className="relative overflow-hidden border border-white/15 bg-[#111d2d]/85 p-3 shadow-2xl backdrop-blur-sm">
              <img
                src={officeImage}
                alt="Law library interior"
                width={1600}
                height={912}
                className="h-[340px] w-full object-cover"
              />

              <div className="border-t border-gold/35 px-5 py-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                  Barron Law Firm PLLC
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                  A personal approach to legal representation.
                </h2>
                <Link
                  to="/about"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ead6a9] transition-colors hover:text-white"
                >
                  Get to know our firm
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-9 flex items-center gap-3 border border-gold/40 bg-[#111d2d] px-5 py-4 shadow-xl">
              <Award className="h-8 w-8 text-gold" />
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  Since {FIRM.established}
                </p>
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/60">
                  Firm history
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      </section>

      {/* INTRODUCTION */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -bottom-4 -left-4 right-8 top-8 border border-gold/50" />
              <div className="relative overflow-hidden bg-secondary p-2">
                <img
                  src={officeImage}
                  alt="Law library and professional legal environment"
                  width={1600}
                  height={912}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>

              <div className="absolute -bottom-7 right-0 max-w-[240px] border border-gold/40 bg-navy-deep px-5 py-5 text-ivory shadow-xl md:-right-5">
                <p className="font-display text-3xl font-semibold text-gold">
                  {FIRM.established}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.17em] text-white/75">
                  Year the firm was established
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <SectionLabel>Welcome to Barron Law Firm</SectionLabel>

            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              Legal representation that starts with listening.
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              An injury can affect your health, your work, your family, and your
              future. Getting clear information about your legal options is an
              important first step.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              Barron Law Firm PLLC represents clients in personal injury matters
              in Little Rock, Arkansas. Our approach emphasizes individual
              attention, careful case preparation, and helping clients understand
              the process ahead.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Personal attention to your circumstances",
                "Clear communication about the legal process",
                "A discussion of your available legal options",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-6 text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-3 border-b border-gold pb-2 text-xs font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-gold"
            >
              Discover Our Firm
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal direction="right" className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <SectionLabel>How We Can Help</SectionLabel>
            </div>

            <h2 className="mt-5 font-display text-3xl font-semibold text-foreground md:text-5xl">
              Our Practice Areas
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Explore the types of personal injury matters covered by our
              practice. Every situation is different, and the right next step
              depends on the facts of your case.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area, index) => {
              const Icon = ICONS[area.icon];

              return (
                <Reveal
                  key={area.slug}
                  direction="right"
                  delay={index * 80}
                  as="article"
                >
                  <Link
                    to="/practice-areas/$slug"
                    params={{ slug: area.slug }}
                    className="group relative flex h-full min-h-[280px] flex-col overflow-hidden border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_18px_40px_rgba(15,29,49,0.09)] md:p-8"
                  >
                    <div className="absolute right-0 top-0 h-20 w-20 border-b border-l border-gold/10 transition-colors group-hover:border-gold/40" />

                    <div className="flex h-14 w-14 items-center justify-center border border-gold/30 bg-navy-deep text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-6 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-gold">
                      {area.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                      {area.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground">
                        Explore Practice Area
                      </span>
                      <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY THE FIRM */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border border-gold/40" />
              <img
                src={capitolImage}
                alt="Arkansas State Capitol in Little Rock"
                width={1600}
                height={912}
                loading="lazy"
                className="relative aspect-[5/4] w-full object-cover shadow-xl"
              />
              <div className="absolute bottom-5 left-5 right-5 border border-white/20 bg-[#101d30]/90 p-5 backdrop-blur-sm md:bottom-8 md:left-8 md:right-8 md:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Serving Little Rock, Arkansas
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">
                  Your case deserves careful consideration.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <SectionLabel>Why Choose Barron Law Firm</SectionLabel>

            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              Informed decisions. Individual attention.
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              Understanding your rights after an accident can feel overwhelming.
              Legal guidance can help you assess the circumstances, understand
              potential next steps, and make informed decisions about your claim.
            </p>

            <div className="mt-9 space-y-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Careful case preparation",
                  text: "Reviewing the circumstances and available information relevant to your matter.",
                },
                {
                  icon: HeartHandshake,
                  title: "A client-focused approach",
                  text: "Taking time to understand your concerns and explain the legal process.",
                },
                {
                  icon: Clock,
                  title: "Clear communication",
                  text: "Helping you understand important steps and decisions as your matter progresses.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 bg-secondary text-gold">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-navy-deep px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold hover:text-navy-deep"
            >
              Discuss Your Situation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ASSOCIATIONS AND CREDENTIALS */}
      <div className="border-y border-border">
        <AssociationsMarquee />
      </div>
      
      {/* SERVICES AND CONTACT */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">

          {/* SERVICES */}
          <Reveal direction="right">
            <SectionLabel>Areas of Focus</SectionLabel>

            <h2 className="mt-5 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Legal services
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Learn more about the legal matters and injury-related issues
              addressed by the firm.
            </p>

            <ul className="mt-7 space-y-0">
              {SPECIALTIES.map((specialty) => (
                <li
                  key={specialty}
                  className="group flex items-center gap-3 border-b border-border py-4 text-sm font-medium text-foreground transition-all duration-300 hover:translate-x-1"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {specialty}
                </li>
              ))}
            </ul>

            <Link
              to="/practice-areas"
              className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:text-gold"
            >
              Explore practice areas
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          {/* CONTACT */}
          <Reveal direction="left">
            <div className="relative h-full overflow-hidden border border-border bg-background p-7 shadow-sm md:p-10">
              <div className="absolute right-0 top-0 h-1 w-24 bg-gold" />

              <SectionLabel>Get in touch</SectionLabel>

              <h2 className="mt-5 font-display text-3xl font-semibold text-foreground md:text-4xl">
                Speak with our firm
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Contact Barron Law Firm to discuss your legal concerns and
                learn more about the services we provide.
              </p>

              <div className="mt-8 space-y-6">

                {/* PHONE */}
                <a
                  href={`tel:${FIRM.phone}`}
                  className="group flex items-start gap-4 border-b border-border pb-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      Call our office
                    </span>
                    <span className="mt-2 block break-words text-lg font-semibold text-foreground transition-colors group-hover:text-gold">
                      {FIRM.phone}
                    </span>
                  </span>
                </a>

                {/* EMAIL */}
                <a
                  href={`mailto:${FIRM.email}`}
                  className="group flex items-start gap-4 border-b border-border pb-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      Email
                    </span>
                    <span className="mt-2 block break-all text-base font-semibold text-foreground transition-colors group-hover:text-gold">
                      {FIRM.email}
                    </span>
                  </span>
                </a>

                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>

                  <div className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      Office address
                    </span>
                    <p className="mt-2 text-base leading-7 text-foreground">
                      {FIRM.address.full}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Little Rock, Arkansas
                    </p>
                  </div>
                </div>

                {/* OFFICE HOURS */}
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold">
                    <Clock className="h-5 w-5" />
                  </span>

                  <div>
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      Office hours
                    </span>
                    <p className="mt-2 text-sm leading-7 text-foreground">
                      Monday – Friday: 8:30 AM – 5:00 PM
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${FIRM.phone}`}
                className="mt-9 inline-flex w-full items-center justify-center gap-3 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-foreground"
              >
                <Phone className="h-4 w-4" />
                Call Barron Law Firm
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-gold/20" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-gold/20" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Barron Law Firm PLLC
              <span className="h-px w-8 bg-gold" />
            </span>

            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-5xl md:leading-tight">
              Have questions about your
              <span className="block italic text-gold">
                legal options?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
              Reach out to our Little Rock office to discuss your concerns
              and learn more about how we may be able to assist you.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${FIRM.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-navy-deep"
              >
                <Phone className="h-4 w-4" />
                {FIRM.phone}
              </a>

              <a
                href={`mailto:${FIRM.email}`}
                className="inline-flex items-center justify-center gap-3 border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-gold hover:bg-white/5"
              >
                <Mail className="h-4 w-4" />
                Email Our Office
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-navy-deep text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">

          <div>
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-semibold tracking-wide">
                Barron <span className="text-gold">Law Firm</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
              Providing legal services from Little Rock, Arkansas.
              Contact our office to discuss your legal concerns.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Quick links
            </h3>

            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-white/70">
              <Link to="/" className="transition-colors hover:text-gold">
                Home
              </Link>
              <Link to="/about" className="transition-colors hover:text-gold">
                About
              </Link>
              <Link to="/practice-areas" className="transition-colors hover:text-gold">
                Practice Areas
              </Link>
              <Link to="/contact" className="transition-colors hover:text-gold">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Contact information
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/70">
              <a
                href={`tel:${FIRM.phone}`}
                className="flex items-start gap-3 transition-colors hover:text-gold"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{FIRM.phone}</span>
              </a>

              <a
                href={`mailto:${FIRM.email}`}
                className="flex items-start gap-3 transition-colors hover:text-gold"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="break-all">{FIRM.email}</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{FIRM.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
            <p>
              © {new Date().getFullYear()} Barron Law Firm PLLC. All rights reserved.
            </p>

            <p>
              Little Rock, Arkansas
            </p>
          </div>
        </div>
      </footer>
        

    </main>
  );
}
