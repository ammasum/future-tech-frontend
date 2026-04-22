import type { Metadata } from "next";

import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { PageSection, PageShell } from "@/components/site/page-shell";
import { getContactOverview } from "@/lib/site-api";

export const metadata: Metadata = {
  title: "Contact & Review",
  description:
    "Get in touch with X-prox Telecom — office location, contact details, certifications, partner logos, and client reviews for telecom infrastructure services.",
  openGraph: {
    title: "Contact & Review | X-prox Telecom",
    description:
      "Office details, inquiry form, certificates, partner logos, and client feedback for X-prox Telecom services.",
  },
};

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const overview = await getContactOverview();

  return (
    <PageShell
      eyebrow="Contact & credibility"
      title="Location, contact details, authority signals, and client feedback"
      description="Office contact details, review content, partnership signals, and an inquiry form for project discussions — all connected to the backend."
      aside={
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Office
            </p>
            <p className="mt-2 text-sm leading-6 text-site-muted">
              {overview.office.name}
            </p>
            <p className="text-sm leading-6 text-site-muted">
              {overview.office.address}
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-site-line bg-site-bg/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
              Direct contact
            </p>
            <a
              href={`mailto:${overview.office.email}`}
              className="mt-2 inline-flex text-sm font-medium text-site-accent-strong transition hover:text-site-accent"
            >
              {overview.office.email}
            </a>
            <a
              href={overview.office.phoneHref}
              className="mt-1 inline-flex text-sm font-medium text-site-accent-strong transition hover:text-site-accent"
            >
              {overview.office.phone}
            </a>
          </div>
        </div>
      }
    >
      <div className="grid gap-6">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <PageSection
            eyebrow="Location"
            title="Office and deployment coordination point"
            description="The proposal calls for maps and direct communication details. This version keeps the office block prominent while the interactive map can be embedded later."
          >
            <div className="grid gap-4">
              <div className="flex min-h-72 items-end rounded-[1.5rem] border border-site-line bg-linear-to-br from-site-fg via-slate-900 to-site-accent-strong p-6 text-white">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    Map placeholder
                  </p>
                  <h2 className="mt-3 font-display text-3xl tracking-[-0.04em]">
                    {overview.office.mapLabel}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                    {overview.office.name}, {overview.office.address}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Address
                  </p>
                  <p className="mt-2 text-sm leading-6 text-site-muted">
                    {overview.office.address}
                  </p>
                </article>
                <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Phone
                  </p>
                  <a
                    href={overview.office.phoneHref}
                    className="mt-2 inline-flex text-sm font-medium text-site-accent-strong transition hover:text-site-accent"
                  >
                    {overview.office.phone}
                  </a>
                </article>
                <article className="rounded-[1.25rem] border border-site-line bg-site-surface-strong p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-site-accent">
                    Email
                  </p>
                  <a
                    href={`mailto:${overview.office.email}`}
                    className="mt-2 inline-flex text-sm font-medium text-site-accent-strong transition hover:text-site-accent"
                  >
                    {overview.office.email}
                  </a>
                </article>
              </div>
            </div>
          </PageSection>

          <PageSection
            eyebrow="Inquiry form"
            title="Start a conversation with the team"
            description="This form now submits to the backend contact endpoint so inquiries can be captured instead of remaining static UI."
          >
            <ContactInquiryForm inquiryTopics={overview.inquiryTopics} />
          </PageSection>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <PageSection
            eyebrow="Authority"
            title="Certificates and partner signals"
            description="The proposal asked for credibility blocks that help visitors trust the delivery capability before they reach out."
          >
            <div className="grid gap-4">
              <div className="grid gap-3">
                {overview.certificates.map((certificate) => (
                  <article
                    key={certificate}
                    className="rounded-[1.2rem] border border-site-line bg-site-surface-strong p-4 text-sm leading-6 text-site-muted"
                  >
                    {certificate}
                  </article>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {overview.partners.map((partner) => (
                  <article
                    key={partner}
                    className="rounded-[1.2rem] border border-site-line bg-site-surface-strong p-4 text-sm font-medium text-site-fg"
                  >
                    {partner}
                  </article>
                ))}
              </div>
            </div>
          </PageSection>

          <PageSection
            eyebrow="Reviews"
            title="Client comments and experience snapshots"
            description="Social proof sits beside the contact path so visitors can see proof of delivery quality without leaving the page."
          >
            <div className="grid gap-4">
              {overview.reviews.map((review) => (
                <article
                  key={review.client}
                  className="rounded-[1.35rem] border border-site-line bg-site-surface-strong p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-site-accent">
                    {review.role}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-site-fg">
                    {review.client}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-site-muted">
                    “{review.quote}”
                  </p>
                </article>
              ))}

              <div className="grid gap-3 md:grid-cols-2">
                {overview.gallery.map((item) => (
                  <article
                    key={item}
                    className="rounded-[1.25rem] border border-site-line bg-linear-to-br from-site-accent-soft via-white to-site-surface-strong p-4 text-sm leading-6 text-site-muted"
                  >
                    {item}
                  </article>
                ))}
              </div>
            </div>
          </PageSection>
        </div>
      </div>
    </PageShell>
  );
}
