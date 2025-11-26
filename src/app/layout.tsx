import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asset Preference Profiler | Discover Your Prediction Style",
  description:
    "A quick, no-right-answer profiler to match you with the markets you're naturally aligned with. Find out if you're a Meme Hunter, Layer2 Explorer, AI Theorist, or more!",
  keywords: [
    "prediction",
    "trading style",
    "personality test",
    "crypto",
    "markets",
    "meme coins",
    "Layer 2",
    "AI",
    "sports betting",
  ],
  authors: [{ name: "PreDiva" }],
  openGraph: {
    title: "Asset Preference Profiler",
    description:
      "Discover your prediction style - which markets are you naturally aligned with?",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asset Preference Profiler",
    description:
      "Discover your prediction style - which markets are you naturally aligned with?",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#E8F5F0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

