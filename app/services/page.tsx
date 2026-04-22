import type { Metadata } from "next";
import Link from "next/link";

import { PageSection, PageShell } from "@/components/site/page-shell";
import { getServicesPageContent } from "@/lib/site-api";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore X-prox Telecom networking services — Corporate & Business, Apartment & Standard, and Contractual deployment solutions tailored to your environment.",
  openGraph: {
    title: "Services | X-prox Telecom",
    description:
      "Networking solutions organized by deployment context — corporate offices, residential properties, and contractual project sites.",
  },
};

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const {
    siteConfig,
    serviceCategories,
    deliveryPrinciples,
    inquiryOptions,
  } = await getServicesPageContent();

  return (
    <PageShell
      eyebrow="Tiered networking solutions"
      title="Services organized by how each client environment actually operates"
      description="X-prox Telecom structures its service offering around three deployment contexts: corporate operations, residential coverage, and contractual project work. Each lane is designed to keep planning, installation, and support aligned with the real environment."
      aside={
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              What this page does
            </p>
            <p className="mt-2 text-sm text-site-muted">
              It separates the core service lanes so visitors can identify the
              right fit before moving into quote requests or equipment review.
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-site-line bg-site-bg/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Inquiry contact
            </p>
            <p className="mt-2 text-sm leading-6 text-site-muted">
              {siteConfig.contact.address}
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-1 inline-flex text-sm font-medium text-site-accent-strong transition hover:text-site-accent"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-site-fg px-5 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
          >
            Talk to the team
          </Link>
        </div>
      }
    >
      <div className="grid gap-6">
        <PageSection
          eyebrow="Service lanes"
          title="Choose the service category that matches the deployment context"
          description="Each category below includes the audience, the working advantages, and the kinds of setups it is intended to support."
        >
          <div className="grid gap-5 xl:grid-cols-3">
            {serviceCategories.map((service) => (
              <article
                key={service.eyebrow}
                className="flex h-full flex-col rounded-[1.5rem] border border-site-line bg-site-surface-strong p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                  {service.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-2xl tracking-[-0.03em] text-site-fg">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-site-muted">
                  {service.description}
                </p>

                <div className="mt-5 rounded-[1.25rem] border border-site-line bg-site-bg/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Best fit
                  </p>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {service.audience}
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Key benefits
                  </p>
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="rounded-[1.1rem] border border-site-line bg-site-surface px-4 py-3 text-sm leading-6 text-site-muted"
                    >
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Typical use cases
                  </p>
                  {service.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="rounded-[1.1rem] border border-site-line bg-site-surface px-4 py-3 text-sm leading-6 text-site-muted"
                    >
                      {useCase}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-site-accent-strong transition hover:text-site-accent"
                >
                  Inquire about this service
                </Link>
              </article>
            ))}
          </div>
        </PageSection>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <PageSection
            eyebrow="Delivery approach"
            title="Why the service model is split this way"
            description="The goal is not to force one package across every scenario. The service structure reflects the different operational demands of business sites, residential properties, and time-bound projects."
          >
            <div className="space-y-4">
              <p className="text-sm leading-7 text-site-muted md:text-base">
                A business floor, an apartment building, and an event or
                project site do not ask for the same planning logic. Capacity,
                maintenance expectations, rollout timing, and access design all
                change with the environment.
              </p>
              <p className="text-sm leading-7 text-site-muted md:text-base">
                This page makes that distinction explicit so the rest of the
                platform can stay clearer: the equipment page can map to the
                right infrastructure layer, the track-work flow can reflect live
                deployment progress, and the contact path can start with more
                accurate inquiry information.
              </p>

              <div className="grid gap-4 pt-2">
                {deliveryPrinciples.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.3rem] border border-site-line bg-site-surface-strong p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-site-muted">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </PageSection>

          <PageSection
            eyebrow="Inquiry path"
            title="Move from browsing to the right next action"
            description="The services page should make the next step obvious whether the visitor needs a quote, wants to review hardware, or is already in an active service relationship."
          >
            <div className="grid gap-4">
              {inquiryOptions.map((option) => (
                <article
                  key={option.title}
                  className="rounded-[1.35rem] border border-site-line bg-site-surface-strong p-5"
                >
                  <h2 className="font-display text-2xl tracking-[-0.03em] text-site-fg">
                    {option.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {option.description}
                  </p>
                  <Link
                    href={option.href}
                    className="mt-5 inline-flex items-center justify-center rounded-full border border-site-line bg-site-surface px-5 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
                  >
                    {option.label}
                  </Link>
                </article>
              ))}
            </div>
          </PageSection>
        </div>
      </div>
    </PageShell>
  );
}
