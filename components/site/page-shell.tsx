import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  children: ReactNode;
};

type PageSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function PageShell({
  eyebrow,
  title,
  description,
  aside,
  children,
}: PageShellProps) {
  return (
    <main className="px-6 py-10 md:px-8 md:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="grid gap-6 rounded-[2rem] border border-site-line bg-site-surface px-6 py-8 shadow-site-panel backdrop-blur md:px-8 md:py-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-site-accent/20 bg-site-accent-soft px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-site-accent-strong">
              {eyebrow}
            </span>
            <div className="space-y-3">
              <h1 className="max-w-3xl font-display text-4xl tracking-[-0.04em] text-site-fg md:text-6xl">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-site-muted md:text-lg">
                {description}
              </p>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-site-line/80 bg-site-surface-strong p-5 text-sm leading-6 text-site-muted">
            {aside}
          </div>
        </section>

        {children}
      </div>
    </main>
  );
}

export function PageSection({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageSectionProps) {
  return (
    <section
      className={cn(
        "rounded-[1.75rem] border border-site-line bg-site-surface px-6 py-6 shadow-site-panel backdrop-blur md:px-7 md:py-7",
        className,
      )}
    >
      <div className="space-y-5">
        <div className="space-y-2">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-2xl tracking-[-0.03em] text-site-fg md:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-3xl text-sm leading-6 text-site-muted md:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
