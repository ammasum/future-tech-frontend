"use client";

import { useState } from "react";

type ContactInquiryFormProps = {
  inquiryTopics: string[];
};

type FeedbackState = {
  tone: "success" | "error";
  title: string;
  body: string;
  details?: string[];
};

const apiBaseUrl =
  process.env.NEXT_PUBLIC_SITE_API_BASE_URL ?? "http://127.0.0.1:4000/api/v1";

export function ContactInquiryForm({
  inquiryTopics,
}: ContactInquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);

  return (
    <div className="space-y-5">
      <form
        className="grid gap-4"
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          setIsSubmitting(true);
          setFeedback(null);

          try {
            const response = await fetch(`${apiBaseUrl}/contact/inquiries`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                topic: formData.get("topic"),
                message: formData.get("message"),
              }),
            });

            const json = (await response.json()) as {
              message?: string;
              data?: {
                id: string;
                createdAt: string;
              };
            };

            if (!response.ok) {
              setFeedback({
                tone: "error",
                title: "Inquiry not submitted",
                body: json.message ?? "The backend rejected the inquiry.",
              });
              return;
            }

            event.currentTarget.reset();

            setFeedback({
              tone: "success",
              title: "Inquiry submitted",
              body:
                "The backend accepted the contact inquiry and stored the request for follow-up.",
              details: [
                `Inquiry ID: ${json.data?.id ?? "n/a"}`,
                `Created at: ${json.data?.createdAt ?? "n/a"}`,
              ],
            });
          } catch (error) {
            console.error("Contact inquiry failed", error);
            setFeedback({
              tone: "error",
              title: "Connection problem",
              body: "The frontend could not reach the backend contact API.",
            });
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <label className="grid gap-2">
          <span className="text-sm font-medium text-site-fg">Name</span>
          <input
            name="name"
            type="text"
            placeholder="your name"
            className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
          />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-site-fg">Email</span>
            <input
              name="email"
              type="email"
              placeholder="name@company.com"
              className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-site-fg">Phone</span>
            <input
              name="phone"
              type="tel"
              placeholder="+880..."
              className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-site-fg">Topic</span>
          <select
            name="topic"
            defaultValue={inquiryTopics[0] ?? ""}
            className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition focus:border-site-accent/45"
          >
            {inquiryTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-site-fg">Message</span>
          <textarea
            name="message"
            rows={5}
            placeholder="briefly describe the environment, scope, or support need"
            className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-[1.2rem] bg-site-fg px-5 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting inquiry..." : "Send inquiry"}
        </button>
      </form>

      {feedback ? (
        <div
          className={`rounded-[1.3rem] border p-5 ${
            feedback.tone === "success"
              ? "border-emerald-200 bg-emerald-50/90"
              : "border-rose-200 bg-rose-50/90"
          }`}
        >
          <h3 className="font-display text-2xl tracking-[-0.03em] text-site-fg">
            {feedback.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-site-muted">
            {feedback.body}
          </p>
          {feedback.details ? (
            <div className="mt-4 grid gap-2">
              {feedback.details.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-site-line bg-white/70 px-4 py-3 text-sm leading-6 text-site-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
