import { Question } from "@/types";

export const questions: Question[] = [
  {
    id: 1,
    title: "How long do you usually like to keep a position open?",
    options: [
      {
        label: "Minutes or hours – I love fast moves.",
        weights: { meme: 1, sports: 1 },
      },
      {
        label: "A few days – enough time to follow the momentum.",
        weights: { meme: 1, l2: 1 },
      },
      {
        label: "Weeks or months – I think in narratives, not ticks.",
        weights: { macro: 1, ai: 1, elections: 1 },
      },
    ],
  },
  {
    id: 2,
    title: "When a new opportunity appears, what grabs your attention first?",
    options: [
      {
        label: "Funny memes, community vibes, and culture.",
        weights: { meme: 2 },
      },
      {
        label: "Real usage, transactions, and ecosystem metrics.",
        weights: { l2: 2 },
      },
      {
        label: "Tech fundamentals, whitepapers, and roadmap.",
        weights: { ai: 2 },
      },
      {
        label: "Headlines, macro news, and political risk.",
        weights: { macro: 1, elections: 1 },
      },
    ],
  },
  {
    id: 3,
    title: "Which of these \"stories\" sounds most interesting to you?",
    options: [
      {
        label: "A small coin that suddenly becomes the main meme of the cycle.",
        weights: { meme: 2 },
      },
      {
        label: "A new L2 that quietly becomes the default place to build.",
        weights: { l2: 2 },
      },
      {
        label: "An AI protocol that ends up powering dozens of agents and apps.",
        weights: { ai: 2 },
      },
      {
        label: "A surprise election result that flips the whole macro narrative.",
        weights: { macro: 1, elections: 2 },
      },
    ],
  },
  {
    id: 4,
    title: "How do you feel when the chart moves +20% and then -20% in a single day?",
    options: [
      {
        label: "Perfect. That's exactly when I want to play.",
        weights: { meme: 2, sports: 1 },
      },
      {
        label: "I'm fine with it if I understand the underlying thesis.",
        weights: { ai: 1, l2: 1 },
      },
      {
        label: "I prefer clearer regimes driven by macro or politics.",
        weights: { macro: 2, elections: 1 },
      },
    ],
  },
  {
    id: 5,
    title: "Where do you usually look for signals before making a prediction?",
    options: [
      {
        label: "CT threads, Telegram, memes, and vibes.",
        weights: { meme: 2 },
      },
      {
        label: "Dashboards, on-chain data, and ecosystem stats.",
        weights: { l2: 2 },
      },
      {
        label: "Research pieces, long-form analysis, and dev updates.",
        weights: { ai: 2, macro: 1 },
      },
      {
        label: "Polls, odds, live stats, and betting lines.",
        weights: { elections: 1, sports: 2 },
      },
    ],
  },
  {
    id: 6,
    title: "On a prediction platform, which markets do you click on first?",
    options: [
      {
        label: "\"Will this memecoin hit a new ATH?\"",
        weights: { meme: 2 },
      },
      {
        label: "\"Which L2 will flip the others on users or TVL?\"",
        weights: { l2: 2 },
      },
      {
        label: "\"Will this AI token become a top-20 asset?\"",
        weights: { ai: 2 },
      },
      {
        label: "\"Will this election / macro event go against consensus?\"",
        weights: { macro: 1, elections: 2 },
      },
      {
        label: "\"Who wins tonight's game?\"",
        weights: { sports: 2 },
      },
    ],
  },
  {
    id: 7,
    title: "What kind of complexity are you most comfortable with?",
    options: [
      {
        label: "Chaotic price action and social dynamics.",
        weights: { meme: 2 },
      },
      {
        label: "Technical docs, rollups, and infra diagrams.",
        weights: { l2: 2 },
      },
      {
        label: "Model architectures, agents, and AI primitives.",
        weights: { ai: 2 },
      },
      {
        label: "Economic cycles, rates, and political coalitions.",
        weights: { macro: 2, elections: 1 },
      },
    ],
  },
  {
    id: 8,
    title: "How do you prefer to follow the markets you care about?",
    options: [
      {
        label: "Live streams, timelines, and meme threads.",
        weights: { meme: 1, sports: 1 },
      },
      {
        label: "Dashboards and trackers that update all the time.",
        weights: { l2: 1, ai: 1 },
      },
      {
        label: "Macro reports, economic calendars, election coverage.",
        weights: { macro: 1, elections: 1 },
      },
      {
        label: "Scoreboards, live commentary, and match stats.",
        weights: { sports: 2 },
      },
    ],
  },
  {
    id: 9,
    title: "Which of these feels most satisfying when you get it right?",
    options: [
      {
        label: "Catching a meme before everyone else.",
        weights: { meme: 2 },
      },
      {
        label: "Backing the L2 that quietly wins builders and users.",
        weights: { l2: 2 },
      },
      {
        label: "Spotting an AI project before the narrative rotates into it.",
        weights: { ai: 2 },
      },
      {
        label: "Seeing your macro or political call play out over months.",
        weights: { macro: 2, elections: 2 },
      },
      {
        label: "Predicting the outcome of a big game or tournament.",
        weights: { sports: 2 },
      },
    ],
  },
  {
    id: 10,
    title: "If you had to focus on just one theme for the next month, which would you pick?",
    options: [
      {
        label: "Memecoins and culture plays.",
        weights: { meme: 3 },
      },
      {
        label: "L2 adoption and infra battles.",
        weights: { l2: 3 },
      },
      {
        label: "AI, agents, and automation.",
        weights: { ai: 3 },
      },
      {
        label: "Macro shocks and political events.",
        weights: { macro: 2, elections: 2 },
      },
      {
        label: "Sports seasons, playoffs, and tournaments.",
        weights: { sports: 3 },
      },
    ],
  },
];

