import type { Metadata } from "next";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getSiteMeta } from "@/lib/site-api";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "X-prox Telecom",
    template: "%s | X-prox Telecom",
  },
  description:
    "Telecom website foundation for services, equipment visibility, and live project tracking.",
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
