import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "X-prox Telecom",
    template: "%s | X-prox Telecom",
  },
  description:
    "Telecom website foundation for services, equipment visibility, and live project tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
