import { PageSection, PageShell } from "@/components/site/page-shell";
import { SiteMap } from "@/components/site/site-map";
import {
  foundationLayers,
  nextPhaseChecklist,
  primaryRoutes,
  siteConfig,
} from "@/lib/site";

export default function Home() {
  return (
    <PageShell
      eyebrow="Step 1 foundation"
      title={`${siteConfig.name} website architecture`}
      description="The project foundation now defines the site structure, design language, and reusable page patterns before detailed page content is built."
      aside={
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Project brief
            </p>
            <p className="mt-2 text-sm text-site-muted">{siteConfig.summary}</p>
          </div>
          <div className="rounded-[1.25rem] border border-site-line bg-site-bg/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Stage outcome
            </p>
            <p className="mt-2 text-sm text-site-muted">
              Routes, sections, and visual tokens are aligned so the next steps
              can focus on real content.
            </p>
          </div>
        </div>
      }
    >
      <div className="grid gap-6">
        <PageSection
          eyebrow="Site map"
          title="Primary routes from the proposal"
          description="Each route below is live as a lightweight blueprint page so future work can build on stable structure instead of starting from scratch."
        >
          <SiteMap routes={primaryRoutes} />
        </PageSection>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
          <PageSection
            eyebrow="Foundation layers"
            title="What Step 1 establishes"
            description="The goal here is repeatable structure, not final content. These layers reduce rework across the remaining steps."
          >
            <div className="grid gap-4 md:grid-cols-3">
              {foundationLayers.map((layer) => (
                <article
                  key={layer.title}
                  className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4"
                >
                  <h2 className="font-display text-xl tracking-[-0.02em] text-site-fg">
                    {layer.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {layer.description}
                  </p>
                </article>
              ))}
            </div>
          </PageSection>

          <PageSection
            eyebrow="Next up"
            title="Immediate follow-on steps"
            description="This keeps the next AI instructions narrow and sequential."
          >
            <ol className="space-y-3">
              {nextPhaseChecklist.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-site-accent-soft font-semibold text-site-accent-strong">
                    {index + 2}
                  </span>
                  <p className="text-sm leading-6 text-site-muted">{item}</p>
                </li>
              ))}
            </ol>
          </PageSection>
        </div>
      </div>
    </PageShell>
  );
}
