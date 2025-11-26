import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memecoin Playoffs Tournament · Wagmi Interactive Demos",
  description:
    "Pick your winners across head-to-head memecoin matchups, watch the bracket resolve, and see how your bracket compares to market sentiment.",
  openGraph: {
    title: "Memecoin Playoffs Tournament",
    description:
      "A knockout-style memecoin bracket: choose the winners in each matchup, crown your champion, and benchmark your picks against the crowd.",
    url: "https://wagmi.ad/demo/playoff",
    siteName: "Wagmi Interactive Demos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memecoin Playoffs Tournament",
    description:
      "Interactive head-to-head memecoin bracket for prediction markets — turn sentiment into a playable tournament.",
  },
};

export default function PlayoffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

