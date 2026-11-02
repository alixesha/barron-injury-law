import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { FIRM, PRACTICE_AREAS } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero } from "@/components/sections";
import heroImage from "@/assets/hero-courthouse.jpg";

export const Route = createFileRoute("/practice-areas/$slug")({
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.area.title} | Barron Law Firm PLLC — Little Rock, AR`
          : "Practice Area | Barron Law Firm PLLC",
      },
      {
        name: "description",
        content: loaderData?.area.excerpt ?? "Barron Law Firm PLLC practice areas.",
      },
      {
        property: "og:title",
        content: loaderData
          ? `${loaderData.area.title} | Barron Law Firm PLLC`
          : "Practice Area | Barron Law Firm PLLC",
      },
      {
        property: "og:description",
        content: loaderData?.area.excerpt ?? "Barron Law Firm PLLC practice areas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: ({ params }) => {
    const area = PRACTICE_AREAS.find((a) => a.slug === params.slug);
    if (!area) throw notFound();
    return { area };
  },
  component: PracticeAreaDetail,
});

function PracticeAreaDetail() {
  const { area } = Route.useLoaderData();
  const others = PRACTICE_AREAS.filter((a) => a.slug !== area.slug);

  return (
    <main>
      <PageHero
        eyebrow="Practice Area"
        title={area.title}
        intro={area.excerpt}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {area.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 rounded border border-gold/40 bg-gold/5 p-6">
              <h2 className="font-display text-xl font-semibold">
                Free, confidential consultation
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We welcome you with open arms and are proud to represent you. Call the
                attorney today — we don't collect unless you win.
              </p>
              <a
                href={FIRM.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded border border-gold bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-navy-deep transition-colors hover:bg-gold-soft"
              >
                <Phone className="h-4 w-4" /> {FIRM.phone}
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150} as="aside">
            <div className="rounded border border-border bg-secondary p-6">
              <h2 className="font-display text-lg font-semibold">Other practice areas</h2>
              <ul className="mt-4 space-y-2.5">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      to="/practice-areas/$slug"
                      params={{ slug: other.slug }}
                      className="flex items-center justify-between border-b border-border py-2.5 text-sm font-medium transition-colors last:border-0 hover:text-gold"
                    >
                      {other.title}
                      <span className="text-gold">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/practice-areas"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" /> All practice areas
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand image={heroImage} />
    </main>
  );
}
