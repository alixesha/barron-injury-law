import { createFileRoute } from "@tanstack/react-router";
import { Award, Landmark, Scale, Users } from "lucide-react";
import officeImage from "@/assets/office-library.jpg";
import capitolImage from "@/assets/capitol.jpg";
import { FIRM } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { AssociationsMarquee, CTABand, PageHero } from "@/components/sections";
import heroImage from "@/assets/hero-courthouse.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About the Firm | Barron Law Firm PLLC — Little Rock, AR",
      },
      {
        name: "description",
        content:
          "Established in 1975, Barron Law Firm PLLC provides over four decades of experienced personal injury representation in Little Rock, Arkansas. Meet the firm and its associations.",
      },
      { property: "og:title", content: "About the Firm | Barron Law Firm PLLC" },
      {
        property: "og:description",
        content:
          "Established 1975 — over 40 years of experience representing injured Arkansans.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const STATS = [
  { icon: Landmark, value: String(FIRM.established), label: "Year established" },
  { icon: Award, value: "40+", label: "Years of experience" },
  { icon: Users, value: "100%", label: "Focus on each client" },
  { icon: Scale, value: "$0", label: "Fee unless you win" },
];

export function About() {
  return (
    <main>
      <PageHero
        eyebrow="Established 1975"
        title="About Barron Law Firm PLLC"
        intro="Your source for expert attorneys. We have many decades of experience and focus on each client to provide them with the best legal defense available."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Our Story
            </p>
            <h2 className="gold-rule mt-3 pb-1 font-display text-3xl font-semibold md:text-4xl">
              Representing injured Arkansans for four decades
            </h2>
            <div className="mt-9 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Barron Law Firm PLLC was established in {FIRM.established} and has served
                the people of Little Rock and across Arkansas ever since. With over 40
                years of experience, {FIRM.attorney} and the firm handle all types of
                personal injury cases with hard work, team effort, and litigation skill.
              </p>
              <p>
                We provide sound legal counsel to help you obtain the financial
                compensation you deserve after a personal injury accident. When we take on
                a new case, we welcome you with open arms and are proud to represent you —
                analyzing everything from your current legal strategies to your options,
                every step of the way.
              </p>
              <p>
                The firm is a proud member of Arkansas's leading bar and trial lawyer
                organizations, and {FIRM.attorney} has served as a Special Associate
                Justice for the Arkansas Supreme Court.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full border-2 border-gold/50" />
              <img
                src={officeImage}
                alt="Law office library with brass scales of justice"
                width={1600}
                height={912}
                loading="lazy"
                className="relative w-full rounded object-cover shadow-xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="texture-navy py-16 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} direction="right" delay={i * 120} className="text-center">
              <stat.icon className="mx-auto h-8 w-8 text-gold" />
              <p className="mt-4 font-display text-4xl font-semibold text-gold">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-ivory/70">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="border-b border-border bg-secondary">
        <AssociationsMarquee compact />
      </div>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal direction="right" className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Our Commitment
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              By your side, every step of the process
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Insurance companies are not always fair. Many cases settle before they ever
              reach a courtroom — and whether the amount you receive is fair is based on
              the skills of your attorneys. We can represent you the right way and get you
              the results you are owed. We work with you to collect, and we don't collect
              unless you win.
            </p>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <img
              src={capitolImage}
              alt="Arkansas State Capitol in Little Rock at sunset"
              width={1600}
              height={912}
              loading="lazy"
              className="mt-12 w-full rounded object-cover shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      <CTABand image={heroImage} />
    </main>
  );
}
