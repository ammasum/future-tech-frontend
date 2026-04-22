import type { EquipmentCategory, EquipmentItem } from "@/lib/equipment";

type EquipmentCardProps = {
  item: EquipmentItem;
  categoryTitle: EquipmentCategory["title"];
};

export function EquipmentCard({ item, categoryTitle }: EquipmentCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-site-line bg-site-surface-strong p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
            {categoryTitle}
          </p>
          <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-site-fg">
            {item.name}
          </h3>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-site-accent via-sky-500 to-cyan-300 text-sm font-black uppercase tracking-[0.18em] text-white">
          {item.imageLabel}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-site-muted">{item.specSummary}</p>

      <div className="mt-5 rounded-[1.2rem] border border-site-line bg-site-surface px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
          Deployment fit
        </p>
        <p className="mt-2 text-sm leading-6 text-site-muted">
          {item.deploymentFit}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.specs.map((spec) => (
          <span
            key={spec}
            className="rounded-full border border-site-line bg-site-bg/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.08em] text-site-muted"
          >
            {spec}
          </span>
        ))}
      </div>
    </article>
  );
}
