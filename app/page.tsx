import Link from "next/link";

import { PageSection } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site";

const heroHighlights = [
  {
    title: "Enterprise-ready planning",
    description:
      "Structured network design, server room coordination, and uptime-focused rollout planning.",
  },
  {
    title: "Residential fiber delivery",
    description:
      "Apartment, tower, and premium home connectivity with practical mesh Wi-Fi coverage.",
  },
  {
    title: "Visible project progress",
    description:
      "Clients get a cleaner path into delivery status through ticket-based work tracking.",
  },
];

const serviceLanes = [
  {
    label: "Corporate",
    summary: "Business networking, maintenance, and server room care.",
  },
  {
    label: "Apartment",
    summary: "Fiber and mesh Wi-Fi setups for modern residential sites.",
  },
  {
    label: "Contractual",
    summary: "Short-term high-capacity deployments for project-based work.",
  },
];

const expertiseAreas = [
  "Network design and site planning",
  "Fiber rollout and structured cabling",
  "Mesh Wi-Fi and access distribution",
  "Equipment selection and deployment staging",
  "Maintenance coordination and service follow-up",
  "Ticket visibility for active client work",
];

const operatingModel = [
  {
    title: "Plan",
    description:
      "We map the technical scope, hardware fit, and field workflow before installation begins.",
  },
  {
    title: "Deploy",
    description:
      "Teams move from infrastructure setup to configuration with clearer service alignment.",
  },
  {
    title: "Maintain",
    description:
      "Ongoing support stays tied to equipment visibility and a trackable service process.",
  },
];

const serviceHighlights = [
  {
    eyebrow: "Corporate & Business",
    title: "Networks designed for uptime-critical environments",
    description:
      "For offices, campuses, and managed business spaces that need structured deployment and dependable maintenance.",
    points: [
      "Enterprise maintenance workflows",
      "Server room and backbone coordination",
      "Operational continuity support",
    ],
  },
  {
    eyebrow: "Apartment & Standard",
    title: "Reliable fiber and Wi-Fi for residential properties",
    description:
      "For apartments, towers, and premium home users who need stronger in-building connectivity.",
    points: [
      "Fiber-ready access planning",
      "Mesh Wi-Fi coverage strategies",
      "Practical setup for multi-unit environments",
    ],
  },
  {
    eyebrow: "Contractual",
    title: "Flexible deployments for fast-moving project sites",
    description:
      "For events, temporary operations, and phased projects that need high-capacity network delivery on a tighter timeline.",
    points: [
      "Short-term deployment planning",
      "Fast installation coordination",
      "Temporary but dependable network coverage",
    ],
  },
];

const deliveryFlow = [
  {
    step: "01",
    title: "Define the scope",
    description:
      "Start with the service context, technical needs, and the kind of environment being served.",
  },
  {
    step: "02",
    title: "Match the hardware",
    description:
      "Review the equipment stack and align infrastructure choices to the deployment plan.",
  },
  {
    step: "03",
    title: "Track delivery",
    description:
      "Monitor active work with ticket-based updates as installation and configuration move forward.",
  },
  {
    step: "04",
    title: "Access support",
    description:
      "Clients return through the portal to review status, history, and the next support action.",
  },
];

export default function Home() {
  return (
    <main className="px-6 py-10 md:px-8 md:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:gap-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-site-line bg-site-surface px-6 py-8 shadow-site-panel backdrop-blur md:px-8 md:py-10">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-site-accent/50 to-transparent" />
          <div className="absolute -right-12 top-10 h-40 w-40 rounded-full bg-site-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)]">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="inline-flex rounded-full border border-site-accent/20 bg-site-accent-soft px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-site-accent-strong">
                  Managed telecom infrastructure
                </span>
                <div className="space-y-4">
                  <h1 className="max-w-4xl font-display text-4xl tracking-[-0.05em] text-site-fg md:text-6xl">
                    Networks that are planned clearly, deployed cleanly, and
                    tracked in real time.
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-site-muted md:text-lg">
                    {siteConfig.name} designs and maintains connectivity for
                    business environments, apartment properties, and fast-moving
                    contractual projects. The platform brings service context,
                    equipment visibility, and client access into one clearer
                    digital front door.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-site-fg px-6 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
                >
                  Get a quote
                </Link>
                <Link
                  href="/equipment"
                  className="inline-flex items-center justify-center rounded-full border border-site-line bg-site-surface-strong px-6 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
                >
                  View equipment
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full px-2 py-3 text-sm font-medium text-site-accent-strong transition hover:text-site-accent"
                >
                  Existing client login
                </Link>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {heroHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.35rem] border border-site-line bg-site-surface-strong p-4"
                  >
                    <h2 className="font-display text-xl tracking-[-0.03em] text-site-fg">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-site-muted">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.75rem] border border-site-accent/15 bg-linear-to-br from-site-fg via-slate-900 to-site-accent-strong p-6 text-white shadow-site-panel">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                      Operations overview
                    </p>
                    <h2 className="mt-3 font-display text-3xl tracking-[-0.04em]">
                      Built for live network delivery
                    </h2>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    Active
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  {serviceLanes.map((lane) => (
                    <div
                      key={lane.label}
                      className="rounded-[1.25rem] border border-white/10 bg-white/8 p-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                        {lane.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-200">
                        {lane.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-site-line bg-site-surface-strong p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                  Existing clients
                </p>
                <h2 className="mt-3 font-display text-2xl tracking-[-0.03em] text-site-fg">
                  Log in or track active work
                </h2>
                <p className="mt-2 text-sm leading-6 text-site-muted">
                  Use the client portal for account access or jump directly into
                  ticket-based project tracking for live installations.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-full bg-site-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
                  >
                    Open client portal
                  </Link>
                  <Link
                    href="/track-work"
                    className="inline-flex items-center justify-center rounded-full border border-site-line px-5 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
                  >
                    Track active work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageSection
          eyebrow="Who we are"
          title="Technical planning and field delivery in one workflow"
          description="We are positioning X-prox Telecom as a practical infrastructure partner that can move from design to deployment without losing clarity in the handoff."
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="space-y-4">
              <p className="text-sm leading-7 text-site-muted md:text-base">
                The company focuses on network design, setup, and maintenance
                for modern operational environments. That means matching the
                right connectivity model to the client context instead of
                treating office sites, apartment properties, and temporary
                project deployments as the same problem.
              </p>
              <p className="text-sm leading-7 text-site-muted md:text-base">
                This website is built to support that positioning with clearer
                service paths, a visible equipment layer, and a client-facing
                work tracking experience that makes project progress easier to
                understand.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {expertiseAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-site-line bg-site-surface-strong px-4 py-3 text-sm leading-6 text-site-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {operatingModel.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.35rem] border border-site-line bg-site-surface-strong p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                    {item.title}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-site-fg">
                    {item.title} with fewer blind spots
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </PageSection>

        <PageSection
          eyebrow="Services preview"
          title="Network solutions aligned to how clients actually operate"
          description="The homepage introduces the three service lanes from the proposal so visitors can quickly find the right deployment context."
        >
          <div className="grid gap-4 xl:grid-cols-3">
            {serviceHighlights.map((service) => (
              <article
                key={service.eyebrow}
                className="flex h-full flex-col rounded-[1.5rem] border border-site-line bg-site-surface-strong p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-site-fg">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-site-muted">
                  {service.description}
                </p>

                <div className="mt-5 flex-1 space-y-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.1rem] border border-site-line bg-site-bg/80 px-4 py-3 text-sm leading-6 text-site-muted"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-site-accent-strong transition hover:text-site-accent"
                >
                  Explore this service lane
                </Link>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Client journey"
          title="Move from inquiry to handover with clearer visibility"
          description="The homepage now connects the main conversion paths from the proposal: quote inquiry, equipment review, live work tracking, and portal access."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="grid gap-4">
              {deliveryFlow.map((item) => (
                <article
                  key={item.step}
                  className="flex gap-4 rounded-[1.35rem] border border-site-line bg-site-surface-strong p-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-site-accent-soft font-semibold text-site-accent-strong">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-xl tracking-[-0.03em] text-site-fg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-site-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-[1.6rem] border border-site-line bg-linear-to-br from-site-accent-soft via-white to-site-surface-strong p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                Ready to start
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-site-fg">
                Request a quote, inspect the hardware stack, or return to your
                existing project workspace.
              </h2>
              <p className="mt-3 text-sm leading-7 text-site-muted md:text-base">
                The first version of the site is centered on clarity: show the
                service lanes, point visitors toward the right next action, and
                give existing clients a direct route back into ongoing work.
              </p>

              <div className="mt-6 grid gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-site-fg px-6 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
                >
                  Get a quote
                </Link>
                <Link
                  href="/equipment"
                  className="inline-flex items-center justify-center rounded-full border border-site-line bg-white/70 px-6 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
                >
                  View equipment catalog
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border border-site-line bg-white/70 px-6 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
                >
                  Client login
                </Link>
              </div>

              <div className="mt-6 rounded-[1.25rem] border border-site-line bg-white/65 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                  Contact point
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
            </div>
          </div>
        </PageSection>
      </div>
    </main>
  );
}
