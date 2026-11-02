import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BriefcaseBusiness, GraduationCap, Mail, Phone, Scale } from "lucide-react";
import { Reveal } from "../components/reveal";
import { FIRM } from "../data/site";

import johnBarron from "../assets/john-barron.png";
import jeanieBarron from "../assets/jeanie-barron.png";
import carolAnneCullum from "../assets/carol-anne-cullum.png";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: "Our Team | Barron Law Firm PLLC" },
      {
        name: "description",
        content:
          "Meet the team at Barron Law Firm PLLC in Little Rock, Arkansas.",
      },
    ],
  }),
  component: OurTeamPage,
});

const team = [
  {
    name: "John W. Barron, Jr.",
    role: "Attorney",
    image: johnBarron,
    icon: Scale,
    description:
      "John W. Barron leads the firm's legal work, helping clients understand their options and navigate challenging legal matters.",
    details: [
      "Attorney",
      "Barron Law Firm PLLC",
      "Little Rock, Arkansas",
    ],
  },
  {
    name: "Jeanie Barron",
    role: "Business Manager",
    image: jeanieBarron,
    icon: BriefcaseBusiness,
    description:
      "Jeanie Barron supports the firm's business operations and helps keep the office running smoothly for clients and the legal team.",
    details: [
      "Business management",
      "Office operations",
      "Client support",
    ],
  },
  {
    name: "Carol Anne Cullum",
    role: "Legal Support",
    image: carolAnneCullum,
    icon: GraduationCap,
    description:
      "Carol Anne Cullum brings extensive experience supporting legal matters, including personal injury and medical malpractice cases.",
    details: [
      "Legal support",
      "Personal injury matters",
      "Medical malpractice matters",
    ],
  },
];

function OurTeamPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-gold/20" />
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full border border-gold/20" />

        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Barron Law Firm PLLC
              <span className="h-px w-8 bg-gold" />
            </div>

            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Meet Our <span className="text-gold">Team</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
              Get to know the people behind Barron Law Firm. Our team works
              together to provide attentive service and help clients understand
              their legal options.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-white/70">
              <span className="border border-white/15 px-4 py-3">
                Experience
              </span>
              <span className="border border-white/15 px-4 py-3">
                Personal Attention
              </span>
              <span className="border border-white/15 px-4 py-3">
                Little Rock, Arkansas
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAM INTRO */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              The People Behind the Firm
            </span>

            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              A team committed to serving clients
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-muted-foreground md:text-base">
              Legal matters can feel overwhelming. Our team aims to make the
              process clearer through professional guidance, responsive
              communication, and attentive support throughout each client's
              experience with the firm.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEAM CARDS */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 md:grid-cols-2 md:px-8 xl:grid-cols-3">
          {team.map((member, index) => {
            const Icon = member.icon;

            return (
              <Reveal key={member.name} direction="up">
                <article
                  className="group h-full overflow-hidden border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-xl"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="relative aspect-[4/4.2] overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center border border-white/50 bg-navy-deep/90 text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                      {member.role}
                    </p>

                    <h2 className="mt-3 font-display text-2xl font-semibold">
                      {member.name}
                    </h2>

                    <div className="mt-4 h-px w-14 bg-gold transition-all duration-300 group-hover:w-24" />

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      {member.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {member.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm text-foreground/80"
                        >
                          <Award className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-navy-deep py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Barron Law Firm PLLC
            </p>

            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold md:text-4xl">
              How can our team help you?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
              Contact our Little Rock office to discuss your questions and
              learn more about the legal services we offer.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${FIRM.phone}`}
                className="inline-flex items-center gap-3 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-navy-deep"
              >
                <Phone className="h-4 w-4" />
                Call our office
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:border-gold hover:text-gold"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
      }
