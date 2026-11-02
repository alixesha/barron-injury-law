import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, HeartHandshake, Scale, Stethoscope, TriangleAlert, Umbrella } from "lucide-react";
import { PRACTICE_AREAS, type PracticeArea } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero } from "@/components/sections";
import heroImage from "@/assets/hero-courthouse.jpg";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      {
        title: "Practice Areas | Barron Law Firm PLLC — Little Rock, AR",
      },
      {
        name: "description",
        content:
          "Personal injury, slip and fall, medical negligence, liability claims, auto accidents and insurance assistance — Barron Law Firm PLLC handles all types of personal injury cases in Arkansas.",
      },
      {
        property: "og:title",
        content: "Practice Areas | Barron Law Firm PLLC",
      },
      {
        property: "og:description",
        content:
          "Personal injury, slip and fall, medical negligence, liability claims, auto accidents and insurance assistance in Little Rock, Arkansas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PracticeAreasIndex,
});

const ICONS: Record<PracticeArea["icon"], typeof Car> = {
  heart: HeartHandshake,
  slip: TriangleAlert,
  medical: Stethoscope,
  scale: Scale,
  car: Car,
  umbrella: Umbrella,
};

function PracticeAreasIndex() {
  return (
    <main>
      <PageHero
        eyebrow="Barron Law Firm PLLC"
        title="Our Practice Areas"
        intro="We handle all types of personal injury cases with hard work, team effort, and litigation skill — over 40 years of experience on your side."
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h2 className="mt-5 font-display text-xl font-semibold">{area.title}</h2>
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
      </section>
      <CTABand image={heroImage} />
    </main>
  );
}
