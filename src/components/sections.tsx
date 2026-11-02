
import { Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  Landmark,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ASSOCIATIONS, FIRM } from "@/data/site";
import { Reveal } from "@/components/Reveal";

function AssociationBadge({
  name,
  monogram,
  index,
}: {
  name: string;
  monogram: string;
  index: number;
}) {
  const icons = [Landmark, Scale, ShieldCheck, Award];
  const Emblem = icons[index % icons.length];

  return (
    <article className="group relative mx-3 flex min-h-[132px] w-[270px] shrink-0 items-center gap-4 overflow-hidden rounded-xl border border-[#e8e1d4] bg-white px-5 py-5 shadow-[0_5px_22px_rgba(15,29,49,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c8a96b] hover:shadow-[0_18px_40px_rgba(15,29,49,0.12)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#c8a96b] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-lg border border-[#e8dfce] bg-[#faf8f3] transition-colors duration-300 group-hover:bg-[#f3eddf]">
        <div className="absolute inset-[5px] rounded-md border border-[#c8a96b]/50" />
        <div className="relative flex flex-col items-center justify-center gap-1">
          <Emblem
            aria-hidden="true"
            className="h-6 w-6 text-[#a9894e]"
            strokeWidth={1.5}
          />
          <span className="max-w-[60px] text-center font-serif text-[9px] font-bold tracking-[0.08em] text-[#14243b]">
            {monogram}
          </span>
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a9894e]">
          Professional Recognition
        </p>
        <h3 className="mt-2 font-serif text-[15px] font-semibold leading-snug text-[#17263b]">
          {name}
        </h3>
        <div className="mt-3 h-px w-10 bg-[#c8a96b] transition-all duration-300 group-hover:w-16" />
      </div>

      <BadgeCheck
        aria-hidden="true"
        className="absolute right-3 top-3 h-4 w-4 text-[#c8a96b] opacity-0 transition-opacity group-hover:opacity-100"
      />
    </article>
  );
}

/** Premium scrolling recognition cards. */
export function AssociationsMarquee({
  compact = false,
}: {
  compact?: boolean;
}) {
  const items = [...ASSOCIATIONS, ...ASSOCIATIONS];

  return (
    <section
      className={`relative overflow-hidden bg-[#f1f0ed] ${
        compact ? "py-12 md:py-14" : "py-16 md:py-24"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal direction="right" className="text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#c8a96b]/50 bg-white shadow-sm">
            <Award className="h-5 w-5 text-[#a9894e]" />
          </div>

          <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.32em] text-[#a9894e]">
            Professional Recognition
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight text-[#17263b] md:text-4xl lg:text-5xl">
            A Commitment to
            <span className="block italic text-[#a9894e]">
              Professional Excellence
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666b73] md:text-base">
            Explore the professional organizations and credentials associated
            with {FIRM.name}. Each affiliation and credential should be
            confirmed against its official source.
          </p>

          <div className="mx-auto mt-6 h-px w-20 bg-[#c8a96b]" />
        </Reveal>
      </div>

      <div
        className="marquee mt-10 overflow-hidden md:mt-14"
        aria-label="Professional organizations and credentials"
      >
        <div className="marquee-track items-stretch py-3">
          {items.map((item, index) => (
            <AssociationBadge
              key={`${item.name}-${index}`}
              name={item.name}
              monogram={item.monogram}
              index={index % ASSOCIATIONS.length}
            />
          ))}
        </div>
      </div>

      <p className="mx-auto mt-7 max-w-xl px-5 text-center text-[11px] leading-5 text-[#777b81]">
        Organization names and professional credentials are presented for
        informational purposes. Membership and status should be confirmed
        before publication.
      </p>
    </section>
  );
}

/** Premium call-to-action band. */
export function CTABand({
  image,
  title = "Injured in an accident? Let's discuss your options.",
  body = "Contact Barron Law Firm to discuss your situation and learn about your legal options. Request a consultation today.",
}: {
  image: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#101d30]">
      <img
        src={image}
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-[#101d30]/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101d30] via-[#101d30]/90 to-[#101d30]/65" />

      <div className="mx-auto max-w-5xl px-5 py-16 text-center text-[#f8f5ee] md:px-8 md:py-24">
        <Reveal direction="right">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c8a96b]/60 bg-white/5">
            <Scale className="h-6 w-6 text-[#d7ba7d]" />
          </div>

          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.32em] text-[#d7ba7d]">
            Barron Law Firm PLLC · Little Rock, Arkansas
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            {body}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-[#c8a96b] bg-[#c8a96b] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#101d30] transition-all duration-300 hover:border-[#e0c992] hover:bg-[#e0c992]"
            >
              Request a Consultation
              <Sparkles className="h-4 w-4" />
            </Link>

            <a
              href={FIRM.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/35 px-6 py-3 text-xs font-bold tracking-wide text-white transition-all duration-300 hover:border-[#c8a96b] hover:text-[#e0c992]"
            >
              <Phone className="h-4 w-4" />
              {FIRM.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Elegant navy page header for interior pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="texture-navy relative isolate overflow-hidden text-[#f8f5ee]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full border border-[#c8a96b]/15 md:h-[440px] md:w-[440px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-14 -z-10 h-64 w-64 rounded-full border border-[#c8a96b]/10 md:h-[360px] md:w-[360px]"
      />

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal direction="right">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#c8a96b]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7ba7d]">
              {eyebrow}
            </p>
          </div>

          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-[1.12] md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {intro ? (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
              {intro}
            </p>
          ) : null}

          <div className="mt-7 h-px w-16 bg-[#c8a96b]" />
        </Reveal>
      </div>
    </section>
  );
}
