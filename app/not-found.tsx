import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-6 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-[2rem] border border-site-line bg-site-surface p-8 text-center shadow-site-panel">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
            404
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-[-0.04em] text-site-fg">
            Page not found
          </h1>
          <p className="mt-3 text-sm leading-6 text-site-muted">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-site-fg px-6 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
            >
              Go to homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-site-line bg-site-surface-strong px-6 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
