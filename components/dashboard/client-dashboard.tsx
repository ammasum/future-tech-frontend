"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import {
  clearClientSession,
  getClientSession,
  type ClientSession,
} from "@/lib/client-session";

type DashboardTicket = {
  ticketId: string;
  projectType: string;
  serviceLane: string;
  location: string;
  status: string;
  assignedTeam: string;
  startedAt: string;
  updatedAt: string;
  latestUpdate: string;
};

type DashboardData = {
  client: {
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    memberSince: string;
  };
  tickets: DashboardTicket[];
};

const apiBaseUrl =
  process.env.NEXT_PUBLIC_SITE_API_BASE_URL ?? "http://127.0.0.1:4000/api/v1";

const statusColors: Record<string, string> = {
  "On-site": "bg-amber-100 text-amber-800 border-amber-200",
  Progressing: "bg-sky-100 text-sky-800 border-sky-200",
  Revision: "bg-violet-100 text-violet-800 border-violet-200",
  Success: "bg-emerald-100 text-emerald-800 border-emerald-200",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-BD", {
    dateStyle: "medium",
  }).format(new Date(value));
}

export function ClientDashboard() {
  const router = useRouter();
  const [session, setSession] = useState<ClientSession | null>(null);
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadDashboard = useCallback(async (portalId: string) => {
    try {
      const response = await fetch(
        `${apiBaseUrl}/client-portal/profile/${encodeURIComponent(portalId)}`,
      );

      if (!response.ok) {
        throw new Error("Failed to load dashboard");
      }

      const payload = (await response.json()) as { data: DashboardData };
      setDashboard(payload.data);
    } catch {
      setError("Could not load dashboard data. The backend may be unavailable.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const stored = getClientSession();

    if (!stored) {
      router.replace("/login");
      return;
    }

    setSession(stored);
    void loadDashboard(stored.id);
  }, [router, loadDashboard]);

  function handleLogout() {
    clearClientSession();
    router.replace("/login");
  }

  if (!session) {
    return (
      <div className="rounded-[1.3rem] border border-site-line bg-site-surface-strong p-6 text-sm text-site-muted">
        Checking session...
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid gap-6">
        <div className="rounded-[1.5rem] border border-site-line bg-site-surface-strong p-6">
          <div className="h-5 w-48 animate-pulse rounded-lg bg-site-line" />
          <div className="mt-4 grid gap-3">
            <div className="h-4 w-72 animate-pulse rounded-lg bg-site-line" />
            <div className="h-4 w-56 animate-pulse rounded-lg bg-site-line" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid gap-4">
        <div className="rounded-[1.3rem] border border-rose-200 bg-rose-50/90 p-5 text-sm leading-6 text-rose-900">
          {error}
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              setError(null);
              setLoading(true);
              void loadDashboard(session.id);
            }}
            className="inline-flex items-center justify-center rounded-full bg-site-fg px-5 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
          >
            Retry
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-full border border-site-line px-5 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  const client = dashboard?.client;
  const tickets = dashboard?.tickets ?? [];

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
            Welcome back
          </p>
          <h2 className="mt-1 font-display text-3xl tracking-[-0.04em] text-site-fg">
            {client?.name ?? session.name}
          </h2>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex items-center justify-center rounded-full border border-site-line px-5 py-3 text-sm font-medium text-site-fg transition hover:border-rose-300 hover:text-rose-600"
        >
          Sign out
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
            Company
          </p>
          <p className="mt-2 text-sm leading-6 text-site-muted">
            {client?.company ?? session.company}
          </p>
        </article>
        <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
            Email
          </p>
          <p className="mt-2 text-sm leading-6 text-site-muted">
            {client?.email ?? session.email}
          </p>
        </article>
        <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
            Phone
          </p>
          <p className="mt-2 text-sm leading-6 text-site-muted">
            {client?.phone ?? session.phone}
          </p>
        </article>
        <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
            Member since
          </p>
          <p className="mt-2 text-sm leading-6 text-site-muted">
            {client?.memberSince ? formatDate(client.memberSince) : "N/A"}
          </p>
        </article>
      </div>

      <div>
        <div className="flex items-end justify-between gap-4 border-b border-site-line pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Your projects
            </p>
            <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] text-site-fg">
              {tickets.length} active ticket{tickets.length === 1 ? "" : "s"}
            </h3>
          </div>
          <Link
            href="/track-work"
            className="text-sm font-medium text-site-accent-strong transition hover:text-site-accent"
          >
            Track all work
          </Link>
        </div>

        {tickets.length === 0 ? (
          <div className="mt-4 rounded-[1.3rem] border border-site-line bg-site-surface-strong p-5 text-sm leading-6 text-site-muted">
            No project tickets are associated with your account yet. Once a
            project is started, tickets will appear here.
          </div>
        ) : (
          <div className="mt-4 grid gap-4">
            {tickets.map((ticket) => (
              <Link
                key={ticket.ticketId}
                href={`/track-work?ticketId=${encodeURIComponent(ticket.ticketId)}`}
                className="group rounded-[1.35rem] border border-site-line bg-site-surface-strong p-5 transition hover:border-site-accent/40"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-display text-xl tracking-[-0.03em] text-site-fg group-hover:text-site-accent-strong">
                        {ticket.ticketId}
                      </h4>
                      <span
                        className={`inline-flex rounded-full border px-3 py-0.5 text-xs font-semibold ${
                          statusColors[ticket.status] ??
                          "bg-gray-100 text-gray-800 border-gray-200"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-site-muted">
                      {ticket.projectType} &middot; {ticket.serviceLane}
                    </p>
                  </div>
                  <p className="text-xs text-site-muted">
                    {ticket.location}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-site-muted">
                  {ticket.latestUpdate}
                </p>
                <div className="mt-3 flex gap-4 text-xs text-site-muted">
                  <span>Team: {ticket.assignedTeam}</span>
                  <span>Updated: {formatDate(ticket.updatedAt)}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Link
          href="/track-work"
          className="inline-flex items-center justify-center rounded-full border border-site-line bg-site-surface-strong px-5 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
        >
          Track work
        </Link>
        <Link
          href="/equipment"
          className="inline-flex items-center justify-center rounded-full border border-site-line bg-site-surface-strong px-5 py-3 text-sm font-medium text-site-fg transition hover:border-site-accent/40 hover:text-site-accent-strong"
        >
          Equipment catalog
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-site-fg px-5 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong"
        >
          Contact support
        </Link>
      </div>
    </div>
  );
}
