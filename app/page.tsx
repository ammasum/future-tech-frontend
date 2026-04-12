const highlights = [
  "Next.js 16.2 App Router",
  "Tailwind CSS 4.2.2",
  "TypeScript enabled",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
      <section className="grid w-full gap-10 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.25fr_0.75fr] md:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-sm font-medium text-teal-700">
            Project scaffold complete
          </span>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              Future Tech starts here.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              This project is configured with the latest Next.js 16.2 patch and
              Tailwind CSS 4.2.2, ready for App Router development.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
              href="https://nextjs.org/docs"
              rel="noreferrer"
              target="_blank"
            >
              Read Next.js docs
            </a>
            <a
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              href="https://tailwindcss.com/docs"
              rel="noreferrer"
              target="_blank"
            >
              Read Tailwind docs
            </a>
          </div>
        </div>
        <div className="rounded-[1.5rem] bg-slate-950 p-6 text-slate-100">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
            Included
          </p>
          <ul className="mt-6 space-y-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm font-medium text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Start
            </p>
            <code className="mt-2 block text-sm text-emerald-300">
              npm install
              <br />
              npm run dev
            </code>
          </div>
        </div>
      </section>
    </main>
  );
}
