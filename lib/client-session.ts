export type ClientSession = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
};

const SESSION_KEY = "xprox_client_session";

export function getClientSession(): ClientSession | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ClientSession;
  } catch {
    return null;
  }
}

export function setClientSession(session: ClientSession): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearClientSession(): void {
  localStorage.removeItem(SESSION_KEY);
}
