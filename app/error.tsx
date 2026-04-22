"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="px-6 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-[2rem] border border-rose-200 bg-rose-50/90 p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">
            Something went wrong
          </p>
          <h1 className="mt-3 font-display text-3xl tracking-[-0.04em] text-site-fg">
            This page could not be loaded
          </h1>
          <p className="mt-3 text-sm leading-6 text-site-muted">
            {error.message || "An unexpected error occurred while rendering this page."}
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-site-fg px-6 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}
