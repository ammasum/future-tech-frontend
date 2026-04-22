import type { Metadata } from "next";
import Link from "next/link";

import { EquipmentCard } from "@/components/equipment/equipment-card";
import { PageSection, PageShell } from "@/components/site/page-shell";
import { getEquipmentPageContent } from "@/lib/site-api";

export const metadata: Metadata = {
  title: "Equipment",
};

export const dynamic = "force-dynamic";

export default async function EquipmentPage() {
  const { siteConfig, categories, items, promotionalOffer } =
    await getEquipmentPageContent();

  return (
    <PageShell
      eyebrow="Hardware catalog"
      title="The equipment stack behind X-prox Telecom deployments"
      description="This catalog introduces the core hardware and installation components used across business, residential, and project-based service delivery. The data is structured as mock inventory for now so it can be replaced later with API-backed catalog data."
      aside={
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Catalog snapshot
            </p>
            <p className="mt-2 text-sm text-site-muted">
              {items.length} mock items across {categories.length} telecom
              hardware categories.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            <div className="rounded-[1.25rem] border border-site-line bg-site-bg/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                Best next step
              </p>
              <p className="mt-2 text-sm leading-6 text-site-muted">
                Review the hardware fit, then move into a quote based on the
                service environment and deployment scope.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-site-line bg-site-bg/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                Contact
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-2 inline-flex text-sm font-medium text-site-accent-strong transition hover:text-site-accent"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-site-fg px-5 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
          >
            Request equipment quote
          </Link>
        </div>
      }
    >
      <div className="grid gap-6">
        <PageSection
          eyebrow="Category overview"
          title="Equipment grouped by infrastructure role"
          description="The catalog is organized by routing, switching, fiber delivery, client handoff, cabling, and installation support so the relationship between services and hardware stays readable."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => {
              const itemCount = items.filter(
                (item) => item.category === category.slug,
              ).length;

              return (
                <article
                  key={category.slug}
                  className="rounded-[1.35rem] border border-site-line bg-site-surface-strong p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                    {itemCount} item{itemCount === 1 ? "" : "s"}
                  </p>
                  <h2 className="mt-3 font-display text-2xl tracking-[-0.03em] text-site-fg">
                    {category.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {category.description}
                  </p>
                </article>
              );
            })}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Catalog"
          title="Mock equipment inventory for later API replacement"
          description="Every category is rendered from structured mock data so the page can move to backend-driven inventory without changing the overall layout."
        >
          <div className="grid gap-8">
            {categories.map((category) => {
              const categoryItems = items.filter(
                (item) => item.category === category.slug,
              );

              return (
                <section key={category.slug} className="space-y-4">
                  <div className="flex flex-col gap-2 border-b border-site-line pb-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                        {category.title}
                      </p>
                      <h2 className="mt-2 font-display text-3xl tracking-[-0.03em] text-site-fg">
                        {category.description}
                      </h2>
                    </div>
                    <p className="text-sm text-site-muted">
                      {categoryItems.length} catalog item
                      {categoryItems.length === 1 ? "" : "s"}
                    </p>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    {categoryItems.map((item) => (
                      <EquipmentCard
                        key={item.id}
                        item={item}
                        categoryTitle={category.title}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Offer spotlight"
          title={promotionalOffer.title}
          description={promotionalOffer.description}
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="grid gap-3">
              {promotionalOffer.highlights.map((highlight) => (
                <article
                  key={highlight}
                  className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4"
                >
                  <p className="text-sm leading-6 text-site-muted">{highlight}</p>
                </article>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-site-line bg-linear-to-br from-site-accent-soft via-white to-site-surface-strong p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                Promote bundled delivery
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-site-fg">
                Use the offer section to connect hardware decisions to service
                planning.
              </h2>
              <p className="mt-3 text-sm leading-7 text-site-muted md:text-base">
                This section gives the site a clean place to highlight limited
                bundle pricing, first-time rollout packages, or environment-led
                equipment recommendations without turning the full catalog into a
                sales wall.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-site-fg px-6 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
                >
                  Ask about bundle pricing
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-site-line bg-white/70 px-6 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
                >
                  Match hardware to services
                </Link>
              </div>
            </div>
          </div>
        </PageSection>
      </div>
    </PageShell>
  );
}
