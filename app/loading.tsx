export default function RootLoading() {
  return (
    <main className="px-6 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="animate-pulse space-y-6">
          <div className="rounded-[2rem] border border-site-line bg-site-surface p-8">
            <div className="h-4 w-40 rounded-lg bg-site-line" />
            <div className="mt-4 h-8 w-3/4 rounded-lg bg-site-line" />
            <div className="mt-3 h-4 w-2/3 rounded-lg bg-site-line" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-[1.35rem] border border-site-line bg-site-surface-strong p-5"
                >
                  <div className="h-5 w-24 rounded-lg bg-site-line" />
                  <div className="mt-3 h-4 w-full rounded-lg bg-site-line" />
                  <div className="mt-2 h-4 w-2/3 rounded-lg bg-site-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
