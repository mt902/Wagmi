import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wagmi Interactive Demos",
  description:
    "Explore a small collection of interactive web3 mechanics built for prediction markets: Asset Preference Profiler and Memecoin Playoffs.",
  openGraph: {
    title: "Wagmi Interactive Demos",
    description:
      "Choose between an Asset Preference Profiler that maps your prediction style to markets, or a Memecoin Playoffs tournament that lets you pick winners in head-to-head brackets.",
    url: "https://wagmi.ad",
    siteName: "Wagmi Interactive Demos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wagmi Interactive Demos",
    description:
      "A hub of interactive web3 mechanics designed for prediction markets and community engagement.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-accent-mint/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-accent-lavender/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-accent-butter/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md mx-auto text-center">
        {/* Logo / Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-primary-300 to-accent-coral rounded-2xl flex items-center justify-center mb-6 shadow-soft">
          <span className="text-3xl">✨</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Wagmi Interactive Demos
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg mb-10">
          A small collection of interactive web3 mechanics.
        </p>

        {/* Demo Links */}
        <div className="w-full space-y-4">
          {/* Asset Preference Profiler */}
          <Link
            href="/demo/profiler"
            className="group w-full flex items-center justify-between bg-white/80 backdrop-blur-sm border-2 border-gray-100 rounded-2xl p-5 shadow-soft hover:shadow-card hover:border-primary-200 hover:bg-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-mew-peach rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎭</span>
              </div>
              <div className="text-left">
                <h2 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                  Asset Preference Profiler
                </h2>
                <p className="text-sm text-gray-400">
                  Discover your prediction style
                </p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-gray-300 group-hover:text-primary-400 group-hover:translate-x-1 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          {/* Playoff Tournament */}
          <Link
            href="/demo/playoff"
            className="group w-full flex items-center justify-between bg-white/80 backdrop-blur-sm border-2 border-gray-100 rounded-2xl p-5 shadow-soft hover:shadow-card hover:border-accent-butter hover:bg-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="text-left">
                <h2 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
                  Playoff Tournament
                </h2>
                <p className="text-sm text-gray-400">
                  Pick your memecoin champion
                </p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-gray-300 group-hover:text-amber-400 group-hover:translate-x-1 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          {/* Sleepagotchi Sleep Test */}
          <Link
            href="/demo/sleeptest"
            className="group w-full flex items-center justify-between bg-white/80 backdrop-blur-sm border-2 border-gray-100 rounded-2xl p-5 shadow-soft hover:shadow-card hover:border-purple-300 hover:bg-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🌙</span>
              </div>
              <div className="text-left">
                <h2 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                  Sleep Test
                </h2>
                <p className="text-sm text-gray-400">
                  How sleep-smart are you?
                </p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-gray-300 group-hover:text-purple-400 group-hover:translate-x-1 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-gray-400">
          Built with Next.js, Tailwind, and ✨
        </p>
      </div>
    </main>
  );
}
