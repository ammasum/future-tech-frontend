import Link from "next/link";

import type { SiteConfig, SiteRouteDefinition } from "@/lib/site";

type SiteFooterProps = {
  primaryRoutes: SiteRouteDefinition[];
  siteConfig: SiteConfig;
};

export function SiteFooter({ primaryRoutes, siteConfig }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-4 pt-8 md:px-6 md:pb-6 md:pt-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-site-line bg-site-surface px-6 py-8 shadow-site-panel backdrop-blur md:px-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]">
          <div className="space-y-4">
            <div className="space-y-3">
              <span className="inline-flex rounded-full border border-site-accent/20 bg-site-accent-soft px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-site-accent-strong">
                Built for telecom delivery
              </span>
              <div className="space-y-2">
                <h2 className="font-display text-3xl tracking-[-0.04em] text-site-fg">
                  {siteConfig.name}
                </h2>
                <p className="max-w-xl text-sm leading-6 text-site-muted md:text-base">
                  {siteConfig.summary}
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-site-line bg-site-surface-strong p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                Core focus
              </p>
              <p className="mt-2 text-sm leading-6 text-site-muted">
                Network design, deployment, maintenance, equipment visibility,
                and live work tracking for modern client operations.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Quick links
            </p>
            <nav className="grid gap-2">
              {primaryRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="rounded-[1.1rem] px-3 py-2 text-sm text-site-muted transition hover:bg-site-surface-strong hover:text-site-fg"
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Contact
            </p>
            <div className="grid gap-3">
              <div className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                  Address
                </p>
                <p className="mt-2 text-sm leading-6 text-site-muted">
                  {siteConfig.contact.address}
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4 transition hover:border-site-accent/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                  Email
                </p>
                <p className="mt-2 text-sm leading-6 text-site-muted">
                  {siteConfig.contact.email}
                </p>
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4 transition hover:border-site-accent/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                  Phone
                </p>
                <p className="mt-2 text-sm leading-6 text-site-muted">
                  {siteConfig.contact.phoneLabel}
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-site-line pt-5 text-sm text-site-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Reliable connectivity for business, residential, and project-based
            deployments.
          </p>
        </div>
      </div>
    </footer>
  );
}
