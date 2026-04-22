import type { Metadata } from "next";
import Link from "next/link";

import { PageSection, PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site";

const serviceCategories = [
  {
    eyebrow: "Corporate & Business",
    title: "Enterprise networking for uptime-sensitive operations",
    description:
      "Structured support for offices, managed business environments, campuses, and operational floors where downtime disrupts real work.",
    audience: "Best for offices, shared workspaces, institutions, and managed commercial sites.",
    benefits: [
      "Enterprise maintenance planning and service continuity support",
      "Server room, backbone, and access-layer coordination",
      "Practical escalation paths for performance and stability issues",
    ],
    useCases: [
      "Business internet distribution across multiple departments",
      "Server room setup tied to managed switching and routing",
      "Operational networks that need stronger maintenance discipline",
    ],
  },
  {
    eyebrow: "Apartment & Standard",
    title: "Residential fiber and Wi-Fi coverage built for modern living",
    description:
      "Connectivity packages for apartment buildings, towers, gated properties, and high-end residential users who need stable coverage across real layouts.",
    audience: "Best for multi-unit buildings, premium homes, and apartment operators.",
    benefits: [
      "Fiber-ready setup and in-building distribution planning",
      "Mesh Wi-Fi coverage strategies for dead-zone reduction",
      "Installation patterns designed for daily residential usage",
    ],
    useCases: [
      "Apartment-wide connectivity with floor-by-floor access planning",
      "Home and villa Wi-Fi optimization with mesh coverage",
      "Residential retrofits where signal quality is inconsistent",
    ],
  },
  {
    eyebrow: "Contractual",
    title: "Fast deployment for short-term and project-phase networking",
    description:
      "Flexible network delivery for event operations, temporary work sites, and construction or project phases where time and adaptability matter most.",
    audience: "Best for events, temporary operations, pop-up sites, and phased projects.",
    benefits: [
      "Rapid deployment planning for changing field conditions",
      "High-capacity temporary networking with controlled scope",
      "Clearer coordination between setup, revision, and handover",
    ],
    useCases: [
      "Event connectivity with temporary backbone and access coverage",
      "Construction-phase network support for site operations",
      "Short-duration technical setups that still need dependable delivery",
    ],
  },
];

const deliveryPrinciples = [
  {
    title: "Scope first",
    description:
      "We start with the operating environment, capacity need, and physical layout before choosing how the network should be delivered.",
  },
  {
    title: "Hardware aligned",
    description:
      "Service design stays connected to the equipment layer so routers, switches, fiber endpoints, and accessories match the actual deployment.",
  },
  {
    title: "Trackable execution",
    description:
      "Active work is positioned to move through status-based tracking instead of leaving clients blind during installation and revision.",
  },
];

const inquiryOptions = [
  {
    title: "Need a service quote?",
    description:
      "Start with your environment type, expected scale, and the deployment timeline so the inquiry stays specific.",
    href: "/contact",
    label: "Request a quote",
  },
  {
    title: "Review the hardware stack",
    description:
      "Browse the equipment direction behind the service offering before moving into deployment planning.",
    href: "/equipment",
    label: "View equipment",
  },
  {
    title: "Already an active client?",
    description:
      "Return through the portal or jump into work tracking for live installations and follow-up.",
    href: "/login",
    label: "Client access",
  },
];

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
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
