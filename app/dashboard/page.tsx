import type { Metadata } from "next";

import { ClientDashboard } from "@/components/dashboard/client-dashboard";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Client dashboard for X-prox Telecom portal access, project tickets, and account overview.",
};

export default function DashboardPage() {
  return (
    <PageShell
      eyebrow="Client portal"
      title="Your account and project overview"
      description="View your profile, track active project tickets, and access support resources from your client dashboard."
    >
      <ClientDashboard />
    </PageShell>
  );
}
