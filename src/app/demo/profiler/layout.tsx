import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Preference Profiler · Wagmi Interactive Demos",
  description:
    "Answer a few questions to map your prediction style to different market types and asset classes — a personality-style profiler for web3 prediction markets.",
  openGraph: {
    title: "Asset Preference Profiler",
    description:
      "Discover your prediction style and see which market types and asset buckets fit you best: memecoins, L2s, AI tokens, macro events, elections, and more.",
    url: "https://wagmi.ad/demo/profiler",
    siteName: "Wagmi Interactive Demos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asset Preference Profiler",
    description:
      "A personality-style questionnaire that translates your risk appetite and behavior into a web3 market profile.",
  },
};

export default function ProfilerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

