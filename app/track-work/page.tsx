import type { Metadata } from "next";
import Link from "next/link";

import { PageSection, PageShell } from "@/components/site/page-shell";
import { getWorkTicket, getWorkTrackingOverview } from "@/lib/site-api";
import { workTickets } from "@/lib/work-tracking";

type TrackWorkPageProps = {
  searchParams: Promise<{
    ticketId?: string;
  }>;
};

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("en-BD", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export const metadata: Metadata = {
  title: "Track Work",
  description:
    "Track active X-prox Telecom networking projects by ticket ID — monitor real-time delivery status from on-site through to completion.",
  openGraph: {
    title: "Track Work | X-prox Telecom",
    description:
      "Client-facing project tracking — search by ticket ID to view delivery stage, team assignment, and latest field updates.",
  },
};

export const dynamic = "force-dynamic";

export default async function TrackWorkPage({
  searchParams,
}: TrackWorkPageProps) {
  const { ticketId } = await searchParams;
  const normalizedTicketId = ticketId?.trim().toUpperCase() ?? "";
  const { statuses } = await getWorkTrackingOverview();
  const ticket = normalizedTicketId
    ? await getWorkTicket(normalizedTicketId)
    : null;
  const activeIndex = ticket ? statuses.indexOf(ticket.status) : -1;
  const sampleTickets = workTickets.slice(0, 3);

  return (
    <PageShell
      eyebrow="Live project transparency"
      title="Track active networking work by ticket ID"
      description="Enter your ticket ID to review where a project stands, who is assigned, and what the latest field update says. Ticket data is retrieved from the live backend system."
      aside={
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Status flow
            </p>
            <p className="mt-2 text-sm text-site-muted">
              Projects move through {statuses.join(", ")} depending on field
              progress and handover readiness.
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-site-line bg-site-bg/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Sample lookup
            </p>
            <p className="mt-2 text-sm leading-6 text-site-muted">
              Try one of the example ticket IDs below to preview the backend
              lookup flow.
            </p>
          </div>

          <div className="grid gap-2">
            {sampleTickets.map((entry) => (
              <Link
                key={entry.ticketId}
                href={`/track-work?ticketId=${encodeURIComponent(entry.ticketId)}`}
                className="rounded-[1.1rem] border border-site-line bg-site-surface-strong px-4 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
              >
                {entry.ticketId}
              </Link>
            ))}
          </div>
        </div>
      }
    >
      <div className="grid gap-6">
        <PageSection
          eyebrow="Ticket lookup"
          title="Search by issued ticket ID"
          description="Use the issued project ticket to review the current delivery stage and most recent field note."
        >
          <form className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto]">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-site-fg">Ticket ID</span>
              <input
                type="text"
                name="ticketId"
                defaultValue={normalizedTicketId}
                placeholder="e.g. XP-24017"
                className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-end justify-center rounded-[1.2rem] bg-site-fg px-6 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong lg:self-end"
            >
              Search ticket
            </button>
          </form>

          {!normalizedTicketId ? (
            <div className="rounded-[1.3rem] border border-site-line bg-site-surface-strong p-5 text-sm leading-6 text-site-muted">
              No ticket searched yet. Start with one of the sample IDs or enter
              your own issued ticket to load the project snapshot.
            </div>
          ) : null}

          {normalizedTicketId && !ticket ? (
            <div className="rounded-[1.3rem] border border-rose-200 bg-rose-50/90 p-5 text-sm leading-6 text-rose-900">
              No active ticket was found for <span className="font-semibold">{normalizedTicketId}</span>.
              Check the ID and try again.
            </div>
          ) : null}
        </PageSection>

        {ticket ? (
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <PageSection
              eyebrow="Project snapshot"
              title={`${ticket.clientName} · ${ticket.ticketId}`}
              description={ticket.latestUpdate}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Project type
                  </p>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {ticket.projectType}
                  </p>
                </article>
                <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Service lane
                  </p>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {ticket.serviceLane}
                  </p>
                </article>
                <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Location
                  </p>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {ticket.location}
                  </p>
                </article>
                <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Assigned team
                  </p>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {ticket.assignedTeam}
                  </p>
                </article>
                <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Started
                  </p>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {formatDateTime(ticket.startedAt)}
                  </p>
                </article>
                <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Last updated
                  </p>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {formatDateTime(ticket.updatedAt)}
                  </p>
                </article>
              </div>

              <div className="grid gap-3">
                {ticket.notes.map((note) => (
                  <article
                    key={note}
                    className="rounded-[1.2rem] border border-site-line bg-site-surface-strong p-4 text-sm leading-6 text-site-muted"
                  >
                    {note}
                  </article>
                ))}
              </div>
            </PageSection>

            <PageSection
              eyebrow="Status timeline"
              title={`Current stage: ${ticket.status}`}
              description="The active project stage is highlighted below based on the backend ticket response."
            >
              <div className="grid gap-4">
                {statuses.map((status, index) => {
                  const isComplete = activeIndex >= index;
                  const isCurrent = ticket.status === status;

                  return (
                    <article
                      key={status}
                      className={`rounded-[1.3rem] border p-4 transition ${
                        isCurrent
                          ? "border-site-accent/45 bg-site-accent-soft"
                          : isComplete
                            ? "border-site-line bg-site-surface-strong"
                            : "border-site-line/80 bg-site-surface"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold ${
                            isCurrent
                              ? "bg-site-accent text-white"
                              : isComplete
                                ? "bg-site-fg text-white"
                                : "bg-site-bg text-site-muted"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-display text-2xl tracking-[-0.03em] text-site-fg">
                            {status}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-site-muted">
                            {isCurrent
                              ? "This is the active stage currently reported for the project."
                              : isComplete
                                ? "This stage has already been reached in the workflow."
                                : "This stage is still pending in the delivery sequence."}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </PageSection>
          </div>
        ) : null}
      </div>
    </PageShell>
  );
}
