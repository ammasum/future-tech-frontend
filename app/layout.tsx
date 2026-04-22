import type { Metadata } from "next";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getSiteMeta } from "@/lib/site-api";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "X-prox Telecom | Network Design, Setup & Maintenance",
    template: "%s | X-prox Telecom",
  },
  description:
    "X-prox Telecom delivers managed telecom infrastructure — network design, fiber deployment, equipment solutions, and real-time project tracking for businesses and residential properties in Bangladesh.",
  keywords: [
    "telecom",
    "network design",
    "fiber deployment",
    "managed networking",
    "X-prox Telecom",
    "Bangladesh",
    "ISP",
    "equipment",
    "GPON",
    "Wi-Fi",
  ],
  authors: [{ name: "X-prox Telecom" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "X-prox Telecom",
    title: "X-prox Telecom | Network Design, Setup & Maintenance",
    description:
      "Managed telecom infrastructure for businesses and residential properties — network design, fiber deployment, equipment solutions, and real-time project tracking.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { primaryRoutes, siteConfig } = await getSiteMeta();

  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader primaryRoutes={primaryRoutes} siteConfig={siteConfig} />
          <div className="flex-1">{children}</div>
          <SiteFooter primaryRoutes={primaryRoutes} siteConfig={siteConfig} />
        </div>
      </body>
    </html>
  );
}
