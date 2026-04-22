import type { Metadata } from "next";

import { ClientPortalPanel } from "@/components/login/client-portal-panel";
import { PageSection, PageShell } from "@/components/site/page-shell";

const demoAccounts = [
  {
    label: "Corporate client demo",
    identity: "mahin@commerce-tower.example",
    passcode: "2417",
  },
  {
    label: "Residential client demo",
    identity: "farzana@lakeview.example",
    passcode: "4023",
  },
];

const portalBenefits = [
  "Sign in with email or phone plus passcode",
  "Create a new client portal record from the onboarding form",
  "Trigger the recovery workflow through the backend API",
];

export const metadata: Metadata = {
  title: "Client Login",
  description:
    "Sign in to your X-prox Telecom client portal, create a new account, or recover your passcode for project access.",
  openGraph: {
    title: "Client Login | X-prox Telecom",
    description:
      "Secure client portal access — sign in, onboard, or recover your passcode.",
  },
};

export default function LoginPage() {
  return (
    <PageShell
      eyebrow="Client portal"
      title="Secure client access for sign-in, onboarding, and recovery"
      description="Use the client portal to sign in to your account, create a new portal record, or recover your passcode. All forms are connected to the live backend."
      aside={
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Portal flow
            </p>
            <p className="mt-2 text-sm text-site-muted">
              Existing clients can sign in, new clients can create a portal
              record, and recovery requests can be initiated from the same UI.
            </p>
          </div>

          <div className="grid gap-3">
            {portalBenefits.map((item) => (
              <div
                key={item}
                className="rounded-[1.15rem] border border-site-line bg-site-bg/75 px-4 py-3 text-sm leading-6 text-site-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <PageSection
          eyebrow="Portal access"
          title="Use the backend-connected client forms"
          description="Switch between sign-in, onboarding, and recovery. Each form connects to the backend client-portal API."
        >
          <ClientPortalPanel />
        </PageSection>

        <div className="grid gap-6">
          <PageSection
            eyebrow="Demo credentials"
            title="Try the portal with seeded accounts"
            description="These demo identities can be used to test the sign-in flow with the backend."
          >
            <div className="grid gap-4">
              {demoAccounts.map((account) => (
                <article
                  key={account.label}
                  className="rounded-[1.3rem] border border-site-line bg-site-surface-strong p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                    {account.label}
                  </p>
                  <div className="mt-3 grid gap-3">
                    <div className="rounded-[1rem] border border-site-line bg-site-surface px-4 py-3 text-sm leading-6 text-site-muted">
                      Identity: {account.identity}
                    </div>
                    <div className="rounded-[1rem] border border-site-line bg-site-surface px-4 py-3 text-sm leading-6 text-site-muted">
                      Passcode: {account.passcode}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </PageSection>

          <PageSection
            eyebrow="Portal features"
            title="What you can do from the client portal"
            description="The portal provides secure access to your account, project tracking, and support resources."
          >
            <div className="grid gap-3">
              <article className="rounded-[1.2rem] border border-site-line bg-site-surface-strong p-4 text-sm leading-6 text-site-muted">
                Sign in with your email or phone and passcode to access your
                personalized dashboard with project tickets.
              </article>
              <article className="rounded-[1.2rem] border border-site-line bg-site-surface-strong p-4 text-sm leading-6 text-site-muted">
                New clients can register through the onboarding form to create
                their portal account.
              </article>
              <article className="rounded-[1.2rem] border border-site-line bg-site-surface-strong p-4 text-sm leading-6 text-site-muted">
                Use the recovery flow if you need to reset your passcode and
                regain access to your account.
              </article>
            </div>
          </PageSection>
        </div>
      </div>
    </PageShell>
  );
}
