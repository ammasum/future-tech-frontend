import Link from "next/link";

import type { SiteRouteDefinition } from "@/lib/site";

import { PageSection, PageShell } from "./page-shell";

type RouteBlueprintProps = {
  route: SiteRouteDefinition;
};

export function RouteBlueprint({ route }: RouteBlueprintProps) {
  return (
    <PageShell
      eyebrow={route.eyebrow}
      title={route.title}
      description={route.description}
      aside={
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Current scope
            </p>
            <p className="mt-2 text-sm text-site-muted">
              Step 1 establishes structure only. Full content, interaction, and
              backend wiring are scheduled for later phases.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-site-line bg-site-bg/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Route
            </p>
            <p className="mt-2 font-mono text-sm text-site-fg">{route.href}</p>
          </div>
        </div>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
        <PageSection
          eyebrow="Section blueprint"
          title="Planned content blocks"
          description="These content sections come directly from the proposal and define the eventual page structure."
        >
          <ol className="grid gap-4 md:grid-cols-2">
            {route.sections.map((section, index) => (
              <li
                key={section.title}
                className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                  Section {index + 1}
                </p>
                <h3 className="mt-3 font-display text-xl tracking-[-0.02em] text-site-fg">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-site-muted">
                  {section.description}
                </p>
              </li>
            ))}
          </ol>
        </PageSection>

        <PageSection
          eyebrow="Implementation note"
          title="Why this route is scaffolded now"
          description={route.foundationNote}
        >
          <div className="space-y-4 text-sm leading-6 text-site-muted">
            <p>
              The route is live so future work can focus on real UI and data
              logic instead of redoing app structure.
            </p>
            <div className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                Next likely task
              </p>
              <p className="mt-2">
                Add shared navigation so this route becomes part of a fully
                connected site experience.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex rounded-full border border-site-line bg-site-surface-strong px-4 py-2 font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
            >
              Back to foundation overview
            </Link>
          </div>
        </PageSection>
      </div>
    </PageShell>
  );
}
