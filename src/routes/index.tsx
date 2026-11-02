import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
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

import heroImage from "@/assets/office-library.jpg";
import attorneyImage from "@/assets/john-barron.png";
import capitolImage from "@/assets/capitol.jpg";

import {
  FIRM,
  PRACTICE_AREAS,
  SPECIALTIES,
  type PracticeArea,
} from "@/data/site";

import { Reveal } from "@/components/Reveal";
import { AssociationsMarquee } from "@/components/sections";

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
          "Barron Law Firm PLLC in Little Rock, Arkansas. Learn about personal injury representation, auto accidents, slip and fall, medical negligence and liability claims.",
      },
      {
        property: "og:title",
        content: "Barron Law Firm PLLC | Little Rock, Arkansas",
      },
      {
        property: "og:description",
        content:
          "Contact Barron Law Firm PLLC at (501) 376-7934 to discuss your legal options.",
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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-9 bg-gold" />
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
        {children}
      </p>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background">
      {/* PREMIUM HERO */}
      <section className="relative isolate overflow-hidden bg-[#081326] text-white">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-20 bg-[#081326]/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081326] via-[#081326]/95 to-[#081326]/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#081326]/80 via-transparent to-transparent" />

        <div className="pointer-events-none absolute -right-28 top-10 -z-10 h-80 w-80 rounded-full border border-gold/15 md:h-[560px] md:w-[560px]" />
        <div className="pointer-events-none absolute -right-12 top-24 -z-10 h-64 w-64 rounded-full border border-gold/10 md:h-[440px] md:w-[440px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          {/* HERO TEXT */}
          <div className="hero-enter hero-enter-1 max-w-3xl">
            <SectionLabel>Established {FIRM.established}</SectionLabel>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
              Little Rock, Arkansas
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl xl:text-[78px]">
              Experience.
              <span className="block">Preparation.</span>
              <span className="mt-1 block italic text-gold">
                Personal advocacy.
              </span>
            </h1>

            <div className="mt-7 h-px w-24 bg-gold" />

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              When an injury changes your life, understanding your legal options
              matters. Barron Law Firm PLLC provides personal injury representation
              with attention to each client's circumstances and the details of
              their case.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={FIRM.phoneHref}
                className="group inline-flex min-h-12 items-center justify-center gap-3 border border-gold bg-gold px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#081326] transition duration-300 hover:-translate-y-1 hover:bg-[#ead6a9]"
              >
                <Phone className="h-4 w-4" />
                Call {FIRM.phone}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/35 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:border-gold hover:text-gold"
              >
                Request a Consultation
                <ArrowDownRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/65">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                Individual Attention
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                Prepared Representation
              </span>
            </div>
          </div>

          {/* ATTORNEY PHOTO ONLY */}
          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-[390px] lg:ml-auto">
              <div className="absolute -inset-3 border border-gold/50" />
              <div className="absolute -right-5 -top-5 h-20 w-20 border-r border-t border-gold" />

              <div className="relative overflow-hidden border border-white/15 bg-[#111d2d]/95 p-2 shadow-2xl">
                <img
                  src={attorneyImage}
                  alt="Attorney John W. Barron"
                  width={900}
                  height={1100}
                  fetchPriority="high"
                  className="h-[350px] w-full object-cover object-top sm:h-[440px]"
                />

                <div className="border-t border-gold/40 px-5 py-5 sm:px-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-gold">
                    Barron Law Firm PLLC
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                    John W. Barron
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/60">
                    Attorney
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 flex items-center gap-3 border border-gold/40 bg-[#111d2d] px-4 py-3 shadow-xl sm:-left-8 sm:px-5 sm:py-4">
                <Award className="h-7 w-7 text-gold" />
                <div>
                  <p className="font-display text-lg font-semibold text-white">
                    Since {FIRM.established}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-white/60">
                    Firm history
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      </section>

      {/* THREE VALUE POINTS */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:grid-cols-3 md:px-8">
          {[
            {
              icon: Scale,
              title: "Strategic Counsel",
              text: "A thoughtful approach to your legal concerns.",
            },
            {
              icon: ShieldCheck,
              title: "Client-Focused",
              text: "Clear guidance through the legal process.",
            },
            {
              icon: Award,
              title: "Prepared Advocacy",
              text: "Careful attention to the details of your matter.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 py-6 sm:px-5 lg:px-8 ${
                index !== 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""
              }`}
            >
              <item.icon className="h-7 w-7 shrink-0 text-gold" />
              <div>
                <h2 className="font-display text-base font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CREDENTIALS AND AFFILIATIONS */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="text-center">
            <div className="flex justify-center">
              <SectionLabel>Professional Recognition</SectionLabel>
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Credentials &amp; Affiliations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Professional organizations and affiliations associated with the firm.
            </p>
          </Reveal>

          <div className="mt-10 border-y border-border py-4">
            <AssociationsMarquee />
          </div>
        </div>
      </section>

      {/* PRACTICE AREA INTRO */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <div className="flex justify-center">
              <SectionLabel>How We Can Help</SectionLabel>
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Focused Representation.
              <span className="block">Meaningful Advocacy.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Explore the legal services offered by Barron Law Firm PLLC.
              Every situation is different, and the appropriate approach depends
              on the facts of each case.
            </p>
          </Reveal>

          <div className="mt-8 flex justify-center">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 border-b border-gold pb-2 text-xs font-bold uppercase tracking-wider text-foreground transition hover:text-gold"
            >
              View All Practice Areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
          {PRACTICE_AREAS.map((area, index) => {
            const Icon = ICONS[area.icon];

            return (
              <Reveal key={area.slug} delay={index * 70} as="article">
                <Link
                  to="/practice-areas/$slug"
                  params={{ slug: area.slug }}
                  className="group relative flex h-full min-h-[270px] flex-col overflow-hidden border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl md:p-8"
                >
                  <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-gold/15 transition group-hover:border-gold/50" />

                  <div className="flex h-14 w-14 items-center justify-center border border-gold/40 bg-[#0b1729] text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-[#0b1729]">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-gold">
                    {area.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {area.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                      Learn More
                    </span>
                    <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
            
      {/* OUR APPROACH */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full border border-gold/40" />
              <img
                src={capitolImage}
                alt="Arkansas State Capitol in Little Rock"
                width={1200}
                height={900}
                loading="lazy"
                className="relative aspect-[5/4] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 border border-white/20 bg-[#0b1729]/95 p-5 backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Serving Little Rock, Arkansas
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                  Your concerns deserve careful consideration.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={100}>
            <SectionLabel>Why Choose Our Firm</SectionLabel>

            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Personal attention.
              <span className="block italic text-gold">
                Thoughtful preparation.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-muted-foreground md:text-base">
              An injury can affect your health, work, family, and future.
              Understanding your legal options can help you make informed
              decisions about what to do next.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Careful case preparation",
                  text: "Reviewing the circumstances and information relevant to your matter.",
                },
                {
                  icon: HeartHandshake,
                  title: "Individual attention",
                  text: "Taking time to understand your concerns and priorities.",
                },
                {
                  icon: Clock,
                  title: "Clear communication",
                  text: "Helping you understand the process and the decisions ahead.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 bg-background text-gold">
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
              to="/about"
              className="mt-8 inline-flex items-center gap-3 border-b border-gold pb-2 text-xs font-bold uppercase tracking-wider text-foreground transition hover:text-gold"
            >
              Learn About Our Firm
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* LEGAL SERVICES */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <SectionLabel>Areas of Focus</SectionLabel>

            <h2 className="mt-5 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Legal services
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Learn more about the legal matters and injury-related issues
              addressed by the firm.
            </p>

            <ul className="mt-7">
              {SPECIALTIES.map((specialty) => (
                <li
                  key={specialty}
                  className="group flex items-center gap-3 border-b border-border py-4 text-sm font-medium text-foreground transition-transform duration-300 hover:translate-x-1"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-[#0b1729]">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {specialty}
                </li>
              ))}
            </ul>

            <Link
              to="/practice-areas"
              className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:text-gold"
            >
              Explore Practice Areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          {/* CONTACT CARD */}
          <Reveal direction="left">
            <div className="relative h-full border border-border bg-card p-6 shadow-sm sm:p-9">
              <div className="absolute right-0 top-0 h-1 w-24 bg-gold" />

              <SectionLabel>Get in Touch</SectionLabel>

              <h2 className="mt-5 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Speak with our firm.
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Contact Barron Law Firm PLLC in Little Rock to discuss your
                concerns and learn more about your legal options.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href={FIRM.phoneHref}
                  className="group flex items-start gap-4 border-b border-border pb-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-[#0b1729]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Call Our Office
                    </span>
                    <span className="mt-2 block break-words text-lg font-semibold text-foreground group-hover:text-gold">
                      {FIRM.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={FIRM.emailHref}
                  className="group flex items-start gap-4 border-b border-border pb-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-[#0b1729]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Email
                    </span>
                    <span className="mt-2 block break-all text-base font-semibold text-foreground group-hover:text-gold">
                      {FIRM.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Office Address
                    </span>
                    <p className="mt-2 text-sm leading-7 text-foreground">
                      {FIRM.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Office Hours
                    </span>
                    <div className="mt-2 space-y-1 text-sm leading-6 text-foreground">
                      {FIRM.hours.map((hour) => (
                        <p
                          key={hour.days}
                          className="flex flex-wrap justify-between gap-x-5 gap-y-1"
                        >
                          <span>{hour.days}</span>
                          <span className="text-muted-foreground">
                            {hour.time}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={FIRM.phoneHref}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-gold px-5 py-4 text-xs font-bold uppercase tracking-wider text-[#0b1729] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ead6a9]"
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
      <section className="relative overflow-hidden bg-[#081326] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-gold/20" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-gold/15" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <div className="flex justify-center">
              <SectionLabel>Barron Law Firm PLLC</SectionLabel>
            </div>

            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Have questions about your
              <span className="block italic text-gold">legal options?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
              Contact our Little Rock office to discuss your concerns and learn
              more about the legal options that may be available to you.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={FIRM.phoneHref}
                className="inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#081326] transition duration-300 hover:-translate-y-1 hover:bg-[#ead6a9]"
              >
                <Phone className="h-4 w-4" />
                {FIRM.phone}
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:border-gold hover:text-gold"
              >
                Contact Our Office
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>


    </main>
  );
                  }
          
