import { Profile, CategoryKey } from "@/types";

export const profiles: Record<CategoryKey, Profile> = {
  meme: {
    key: "meme",
    name: "Meme Hunter",
    shortDescription:
      "You live where culture moves the fastest. You read memes as signals, love volatility, and thrive in high-energy cycles.",
    recommendedMarkets: ["Memecoins", "Viral events"],
    color: "#FF9B85",
    bgGradient: "from-orange-100 via-pink-50 to-amber-50",
    icon: "🎭",
  },
  l2: {
    key: "l2",
    name: "Layer2 Explorer",
    shortDescription:
      "You pay attention to real usage. You like ecosystems, infra, and adoption curves more than pure hype.",
    recommendedMarkets: ["L2 battles", "Infra metrics"],
    color: "#7DD3C0",
    bgGradient: "from-teal-100 via-emerald-50 to-cyan-50",
    icon: "🔗",
  },
  ai: {
    key: "ai",
    name: "AI Theorist",
    shortDescription:
      "You think in models, primitives, and long-term impact. You gravitate toward AI and automation narratives.",
    recommendedMarkets: ["AI tokens", "Agent ecosystems"],
    color: "#B4A7D6",
    bgGradient: "from-violet-100 via-purple-50 to-indigo-50",
    icon: "🤖",
  },
  macro: {
    key: "macro",
    name: "Macro Forecaster",
    shortDescription:
      "You connect policy, liquidity, and cycles. You care about the big picture and how regimes change.",
    recommendedMarkets: ["Macro events", "Rate decisions"],
    color: "#87CEEB",
    bgGradient: "from-sky-100 via-blue-50 to-slate-50",
    icon: "📊",
  },
  elections: {
    key: "elections",
    name: "Election Strategist",
    shortDescription:
      "You follow polls, coalitions, and narratives. You enjoy mapping public sentiment into sharp political calls.",
    recommendedMarkets: ["Elections", "Governance outcomes"],
    color: "#FFD93D",
    bgGradient: "from-amber-100 via-yellow-50 to-orange-50",
    icon: "🗳️",
  },
  sports: {
    key: "sports",
    name: "Sports Predictor",
    shortDescription:
      "You thrive on live action, pressure, and performance. You love translating games and stats into clear outcomes.",
    recommendedMarkets: ["Sports markets", "Tournaments"],
    color: "#7DD3A0",
    bgGradient: "from-green-100 via-emerald-50 to-lime-50",
    icon: "⚽",
  },
};

// Order for tie-breaking
export const categoryOrder: CategoryKey[] = [
  "meme",
  "l2",
  "ai",
  "macro",
  "elections",
  "sports",
];

