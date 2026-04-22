"use client";

import { useState } from "react";

type PortalMode = "signin" | "register" | "recover";

type FeedbackState = {
  tone: "success" | "error";
  title: string;
  body: string;
  details?: string[];
};

const apiBaseUrl =
  process.env.NEXT_PUBLIC_SITE_API_BASE_URL ?? "http://127.0.0.1:4000/api/v1";

const panelModes: Array<{ id: PortalMode; label: string }> = [
  { id: "signin", label: "Sign in" },
  { id: "register", label: "Onboarding" },
  { id: "recover", label: "Recover" },
];

export function ClientPortalPanel() {
  const [mode, setMode] = useState<PortalMode>("signin");
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [pendingMode, setPendingMode] = useState<PortalMode | null>(null);

  async function submitRequest(
    currentMode: PortalMode,
    path: string,
    payload: object,
    onSuccess: (data: unknown) => FeedbackState,
  ) {
    setPendingMode(currentMode);
    setFeedback(null);

    try {
      const response = await fetch(`${apiBaseUrl}${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = (await response.json()) as {
        message?: string;
        data?: unknown;
      };

      if (!response.ok) {
        setFeedback({
          tone: "error",
          title: "Request failed",
          body: json.message ?? "The portal request could not be completed.",
        });
        return;
      }

      setFeedback(onSuccess(json.data));
    } catch (error) {
      console.error("Portal request failed", error);
      setFeedback({
        tone: "error",
        title: "Connection problem",
        body: "The frontend could not reach the backend client-portal API.",
      });
    } finally {
      setPendingMode(null);
    }
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-2 rounded-[1.35rem] border border-site-line bg-site-surface-strong p-2 sm:grid-cols-3">
        {panelModes.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setMode(item.id);
              setFeedback(null);
            }}
            className={`rounded-[1rem] px-4 py-3 text-sm font-medium transition ${
              mode === item.id
                ? "bg-site-fg text-white"
                : "text-site-muted hover:bg-site-surface hover:text-site-fg"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {mode === "signin" ? (
        <form
          className="grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);

            void submitRequest(
              "signin",
              "/client-portal/login",
              {
                emailOrPhone: formData.get("emailOrPhone"),
                passcode: formData.get("passcode"),
              },
              (data) => {
                const account = data as {
                  name: string;
                  email: string;
                  phone: string;
                  company: string;
                };

                return {
                  tone: "success",
                  title: "Sign-in accepted",
                  body:
                    "The backend accepted the client credentials for this prototype flow.",
                  details: [
                    `Client: ${account.name}`,
                    `Company: ${account.company}`,
                    `Email: ${account.email}`,
                    `Phone: ${account.phone}`,
                  ],
                };
              },
            );
          }}
        >
          <label className="grid gap-2">
            <span className="text-sm font-medium text-site-fg">
              Email or phone
            </span>
            <input
              name="emailOrPhone"
              type="text"
              placeholder="client email or phone"
              className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-site-fg">Passcode</span>
            <input
              name="passcode"
              type="password"
              placeholder="4-digit passcode"
              className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
            />
          </label>
          <button
            type="submit"
            disabled={pendingMode === "signin"}
            className="inline-flex items-center justify-center rounded-[1.2rem] bg-site-fg px-5 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pendingMode === "signin" ? "Checking access..." : "Sign in"}
          </button>
        </form>
      ) : null}

      {mode === "register" ? (
        <form
          className="grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);

            void submitRequest(
              "register",
              "/client-portal/register",
              {
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                passcode: formData.get("passcode"),
              },
              (data) => {
                const account = data as {
                  name: string;
                  email: string;
                  phone: string;
                };

                return {
                  tone: "success",
                  title: "Onboarding request stored",
                  body:
                    "The backend created a prototype client account for this portal flow.",
                  details: [
                    `Client: ${account.name}`,
                    `Email: ${account.email}`,
                    `Phone: ${account.phone}`,
                  ],
                };
              },
            );
          }}
        >
          <label className="grid gap-2">
            <span className="text-sm font-medium text-site-fg">Name</span>
            <input
              name="name"
              type="text"
              placeholder="full client name"
              className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
            />
          </label>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-site-fg">Phone</span>
              <input
                name="phone"
                type="tel"
                placeholder="+880..."
                className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-site-fg">Email</span>
              <input
                name="email"
                type="email"
                placeholder="client@company.com"
                className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
              />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-site-fg">
              Choose passcode
            </span>
            <input
              name="passcode"
              type="password"
              placeholder="set your passcode"
              className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
            />
          </label>
          <button
            type="submit"
            disabled={pendingMode === "register"}
            className="inline-flex items-center justify-center rounded-[1.2rem] bg-site-fg px-5 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pendingMode === "register"
              ? "Creating account..."
              : "Create portal account"}
          </button>
        </form>
      ) : null}

      {mode === "recover" ? (
        <form
          className="grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);

            void submitRequest(
              "recover",
              "/client-portal/recover",
              {
                emailOrPhone: formData.get("emailOrPhone"),
              },
              (data) => {
                const result = data as { message: string };

                return {
                  tone: "success",
                  title: "Recovery step triggered",
                  body: result.message,
                };
              },
            );
          }}
        >
          <label className="grid gap-2">
            <span className="text-sm font-medium text-site-fg">
              Email or phone
            </span>
            <input
              name="emailOrPhone"
              type="text"
              placeholder="registered email or phone"
              className="rounded-[1.2rem] border border-site-line bg-site-surface-strong px-4 py-3 text-base text-site-fg outline-none transition placeholder:text-site-muted focus:border-site-accent/45"
            />
          </label>
          <button
            type="submit"
            disabled={pendingMode === "recover"}
            className="inline-flex items-center justify-center rounded-[1.2rem] bg-site-fg px-5 py-3 text-sm font-semibold text-white transition hover:bg-site-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pendingMode === "recover"
              ? "Checking contact..."
              : "Start recovery"}
          </button>
        </form>
      ) : null}

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
