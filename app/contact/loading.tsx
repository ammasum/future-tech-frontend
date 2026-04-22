export default function ContactLoading() {
  return (
    <main className="px-6 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="animate-pulse space-y-6">
          <div className="rounded-[2rem] border border-site-line bg-site-surface p-8">
            <div className="h-4 w-36 rounded-lg bg-site-line" />
            <div className="mt-4 h-8 w-3/4 rounded-lg bg-site-line" />
            <div className="mt-3 h-4 w-1/2 rounded-lg bg-site-line" />
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-[1.5rem] border border-site-line bg-site-surface-strong p-6">
              <div className="h-48 rounded-[1.25rem] bg-site-line" />
            </div>
            <div className="rounded-[1.5rem] border border-site-line bg-site-surface-strong p-6">
              <div className="space-y-4">
                <div className="h-10 rounded-[1.2rem] bg-site-line" />
                <div className="h-10 rounded-[1.2rem] bg-site-line" />
                <div className="h-24 rounded-[1.2rem] bg-site-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
