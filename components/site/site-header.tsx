"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getClientSession } from "@/lib/client-session";
import type { SiteConfig, SiteRouteDefinition } from "@/lib/site";

import { cn } from "@/lib/utils";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname.startsWith(href);
}

type SiteHeaderProps = {
  primaryRoutes: SiteRouteDefinition[];
  siteConfig: SiteConfig;
};

export function SiteHeader({ primaryRoutes, siteConfig }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setIsLoggedIn(getClientSession() !== null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-site-line bg-site-surface/90 shadow-site-panel backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded-full transition hover:opacity-90"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-site-accent via-sky-500 to-cyan-300 text-sm font-black uppercase tracking-[0.22em] text-white">
              XP
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-site-accent-strong">
                {siteConfig.name}
              </span>
              <span className="block truncate text-sm text-site-muted">
                {siteConfig.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {primaryRoutes.map((route) => {
              const active = isActiveRoute(pathname, route.href);

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    active
                      ? "bg-site-accent text-white shadow-site-panel"
                      : "text-site-muted hover:bg-site-surface-strong hover:text-site-fg",
                  )}
                >
                  {route.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
         
            <Link
              href={isLoggedIn ? "/dashboard" : "/login"}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
            >
              {isLoggedIn ? "Dashboard" : "Client login"}
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-site-line bg-site-surface-strong text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong lg:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {isOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-site-line px-4 py-4 lg:hidden">
            <nav className="grid gap-2">
              {primaryRoutes.map((route) => {
                const active = isActiveRoute(pathname, route.href);

                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "rounded-[1.2rem] px-4 py-3 text-sm font-medium transition",
                      active
                        ? "bg-site-accent text-white"
                        : "bg-site-surface-strong text-site-fg hover:border-site-accent/40 hover:text-site-accent-strong",
                    )}
                  >
                    {route.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/track-work"
                className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-center text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
              >
                Track work
              </Link>
              <Link
                href={isLoggedIn ? "/dashboard" : "/login"}
                className="rounded-[1.2rem] bg-site-fg px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-site-accent-strong"
              >
                {isLoggedIn ? "Dashboard" : "Client login"}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
