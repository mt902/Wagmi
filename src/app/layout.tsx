import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Wagmi Interactive Demos",
    template: "%s · Wagmi Interactive Demos",
  },
  description:
    "A demo collection of interactive web3 mechanics: asset preference profiling and memecoin playoffs for prediction markets.",
  openGraph: {
    title: "Wagmi Interactive Demos",
    description:
      "Explore interactive web3 mechanics: discover your prediction style with the Asset Preference Profiler and play the Memecoin Playoffs tournament.",
    url: "https://wagmi.ad",
    siteName: "Wagmi Interactive Demos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wagmi Interactive Demos",
    description:
      "Interactive web3 mechanics for prediction markets: profiling and playoffs experiences.",
  },
  icons: {
    icon: "/icon.svg",
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
