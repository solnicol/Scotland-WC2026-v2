import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://scotland-wc-2026-v2.vercel.app";
const TITLE = "Scotland — FIFA World Cup 2026 · Group C Fixtures & Squad";
const DESCRIPTION =
  "Scotland at the FIFA World Cup 2026. Group C fixtures against Haiti, Morocco, and Brazil — kickoffs in your local time, plus the full 26-player squad.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Scotland WC2026",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Scotland — FIFA World Cup 2026: Group C fixtures and squad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/api/og"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={geist.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
