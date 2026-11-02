import { Link } from "@tanstack/react-router";
import { Award, Phone } from "lucide-react";
import { ASSOCIATIONS, FIRM } from "@/data/site";
import { Reveal } from "@/components/Reveal";

/** Association badge used in the scrolling marquee. */
function AssociationBadge({ name, monogram }: { name: string; monogram: string }) {
  return (
    <div className="mx-3 flex w-64 shrink-0 items-center gap-4 rounded border border-gold/30 bg-card px-5 py-4 shadow-sm">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold/70 bg-navy-deep p-1 text-center font-display text-[11px] font-bold leading-tight text-gold">
        {monogram}
      </span>
      <span className="text-sm font-semibold leading-snug text-foreground">{name}</span>
    </div>
  );
}

/**
 * Associations ribbon: badges glide continuously from the left edge
 * across to the right edge (enter left, exit right).
 */
export function AssociationsMarquee({ compact = false }: { compact?: boolean }) {
  const items = [...ASSOCIATIONS, ...ASSOCIATIONS];
  return (
    <section className={compact ? "py-12" : "py-16 md:py-20"}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal direction="right" className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Associations &amp; Honors
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            Recognized by the Legal Community
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {FIRM.attorney} is a proud member of Arkansas's leading bar and trial lawyer
            organizations.
          </p>
        </Reveal>
      </div>
      <Reveal direction="left" delay={150} className="marquee mt-10 overflow-hidden">
        <div className="marquee-track">
          {items.map((a, i) => (
            <AssociationBadge key={`${a.monogram}-${i}`} name={a.name} monogram={a.monogram} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/** Full-width call-to-action band with capitol backdrop. */
export function CTABand({
  image,
  title = "Injured in an accident? Call the attorney today.",
  body = "We work with you to collect — and we don't collect unless you win. Free, confidential consultation.",
}: {
  image: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={image}
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy-deep/85" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center text-ivory md:py-24">
        <Reveal direction="right">
          <Award className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ivory/75">{body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={FIRM.phoneHref}
              className="inline-flex items-center gap-2 rounded border border-gold bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-deep transition-colors hover:bg-gold-soft"
            >
              <Phone className="h-4 w-4" /> {FIRM.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded border border-ivory/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Free Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Navy page header for interior pages. */
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
    <section className="texture-navy text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal direction="right">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{title}</h1>
          {intro ? (
            <p className="mt-4 max-w-2xl text-ivory/75 md:text-lg">{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
