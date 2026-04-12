import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Future Tech Frontend",
  description: "Next.js 16.2 project configured with Tailwind CSS 4.2.2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
