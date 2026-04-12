import Link from "next/link";

import type { SiteRouteDefinition } from "@/lib/site";

type SiteMapProps = {
  routes: SiteRouteDefinition[];
};

export function SiteMap({ routes }: SiteMapProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className="group rounded-[1.5rem] border border-site-line bg-site-surface-strong p-5 transition hover:-translate-y-1 hover:border-site-accent/35 hover:shadow-site-panel"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
            {route.eyebrow}
          </p>
          <div className="mt-3 space-y-2">
            <h3 className="font-display text-2xl tracking-[-0.03em] text-site-fg">
              {route.label}
            </h3>
            <p className="text-sm leading-6 text-site-muted">
              {route.description}
            </p>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-site-line pt-4 text-sm text-site-muted">
            <span>{route.sections.length} planned blocks</span>
            <span className="font-medium text-site-accent-strong transition group-hover:text-site-accent">
              View route
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
