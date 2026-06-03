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

export const metadata: Metadata = {
  metadataBase: new URL("https://scotland-wc2026-v2.vercel.app"),
  title: "Scotland — FIFA World Cup 2026",
  description:
    "Scotland at the FIFA World Cup 2026. Group C fixtures, the 26-player squad, venues, and kickoffs in your local time.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Scotland — FIFA World Cup 2026",
    description:
      "Group C · the Finals. Three group-stage ties to open the campaign, kickoffs shown in your local time.",
    siteName: "Scotland WC2026",
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scotland — FIFA World Cup 2026",
    description:
      "Group C · the Finals. Three group-stage ties to open the campaign.",
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
