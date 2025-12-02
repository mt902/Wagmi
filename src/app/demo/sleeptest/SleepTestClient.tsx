"use client";

import React, { useState } from "react";
import Link from "next/link";

type Question = {
  id: number;
  title: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    title: "Bedroom basics",
    question:
      "What bedroom temperature range is considered best for most people to fall asleep and stay asleep?",
    options: [
      "10–13°C (50–55°F) – the colder the better",
      "15–19°C (59–66°F) – cool but comfortable",
      "22–25°C (72–77°F) – warm and cozy",
      "It doesn't really matter as long as you feel okay",
    ],
    correctIndex: 1,
    explanation:
      "Most sleep research points to a slightly cool room – about 15–19°C (59–66°F). Your body needs to drop its core temperature a bit to fall asleep and stay in deep sleep.",
  },
  {
    id: 2,
    title: "Screens & blue light",
    question:
      "You're scrolling on your phone in bed with the screen close to your face. What's the main problem for your sleep?",
    options: [
      "It makes you physically tired, so you'll sleep deeper",
      "Blue light delays melatonin and keeps your brain in 'day mode'",
      "It burns too many calories before sleep",
      "It doesn't matter if brightness is low",
    ],
    correctIndex: 1,
    explanation:
      "Blue-rich light from phones and tablets signals daytime to your brain, suppressing melatonin and delaying your natural sleep timing.",
  },
  {
    id: 3,
    title: "Caffeine timing",
    question:
      "Roughly how long before bed should most people stop drinking coffee or other strong caffeine?",
    options: [
      "1 hour – caffeine leaves the system very quickly",
      "2 hours – enough for most people",
      "About 6 hours – caffeine's half-life is long",
      "It doesn't matter if you drink coffee every day",
    ],
    correctIndex: 2,
    explanation:
      "Caffeine's half-life is around 5–6 hours for many people. A late-afternoon coffee can still be in your system at bedtime and reduce deep sleep.",
  },
  {
    id: 4,
    title: "Alcohol myth",
    question:
      "A nightcap (a drink before bed) can make you feel sleepy. What does alcohol actually do to your sleep?",
    options: [
      "Improves REM sleep and makes dreams clearer",
      "Helps you fall asleep faster with no downside",
      "Fragments your sleep and reduces REM quality",
      "Has no measurable impact on sleep architecture",
    ],
    correctIndex: 2,
    explanation:
      "Alcohol can make you drowsy, but it fragments sleep, reduces REM, and leads to lighter, less restorative rest overall.",
  },
  {
    id: 5,
    title: "Consistency",
    question:
      "For long-term sleep health, which is more important for most people?",
    options: [
      "A perfectly dark bedroom, even if schedule changes a lot",
      "A consistent wake-up time every day (including weekends)",
      "Sleeping in whenever you feel tired",
      "Taking supplements before bed",
    ],
    correctIndex: 1,
    explanation:
      "A consistent wake-up time anchors your circadian rhythm. It's one of the strongest levers for stabilizing sleep and energy.",
  },
  {
    id: 6,
    title: "Weekend catch-up",
    question:
      "You sleep 5–6 hours on weekdays and 10–11 hours on weekends. What does science say about this strategy?",
    options: [
      "It fully restores your body – debt erased",
      "It partly helps but doesn't fully fix chronic sleep debt",
      "It's worse than not sleeping at all",
      "There is no such thing as sleep debt",
    ],
    correctIndex: 1,
    explanation:
      "Catching up on weekends can help a bit, but chronic weekday sleep restriction still harms mood, cognition, and metabolic health. Consistency wins.",
  },
  {
    id: 7,
    title: "Nap smart",
    question:
      "You want to take a nap without ruining your night sleep. What's usually the safest nap duration?",
    options: [
      "5 minutes – too short to matter",
      "20–30 minutes – a short, light power nap",
      "60–90 minutes – always full sleep cycle or nothing",
      "Any length, as long as you feel better after",
    ],
    correctIndex: 1,
    explanation:
      "A 20–30-minute nap lets you recharge without dropping too deeply into slow-wave sleep, which can make you groggy and delay night-time sleep.",
  },
  {
    id: 8,
    title: "Bed association",
    question:
      "Which habit best supports your brain in associating bed with sleep?",
    options: [
      "Working, watching shows, and eating in bed – it's your comfort zone",
      "Staying in bed when you can't fall asleep, just trying harder",
      "Using the bed mainly for sleep (and sex) and leaving it when you're wide awake",
      "Keeping lights on in bed until you feel exhausted",
    ],
    correctIndex: 2,
    explanation:
      "Using your bed almost only for sleep creates a strong mental link: bed = sleeping. If you're wide awake, getting up for a while and returning sleepy helps reinforce that link.",
  },
  {
    id: 9,
    title: "Chronotypes",
    question:
      "Your friend is a natural night owl; you're a morning type. What's the healthiest approach?",
    options: [
      "Force both of you into the same 5:00 a.m. schedule",
      "Respect individual chronotypes and stabilize each person's rhythm",
      "Regularly switch between early-bird and night-owl modes",
      "Ignore how you feel; only total hours matter",
    ],
    correctIndex: 1,
    explanation:
      "Chronotypes are partly biological. The goal is not to make everyone identical, but to stabilize a realistic schedule around each person's natural rhythm.",
  },
  {
    id: 10,
    title: "Late dinners",
    question:
      "How far from bedtime should you generally avoid very heavy meals to protect your sleep?",
    options: [
      "You should always go to bed completely hungry",
      "Within 30 minutes of sleep is ideal",
      "Roughly 2–3 hours before bed for most people",
      "It doesn't matter as long as you sleep enough",
    ],
    correctIndex: 2,
    explanation:
      "Very heavy meals close to bedtime can disturb sleep by raising body temperature and forcing your digestive system to work overtime while you're trying to rest.",
  },
];

type ResultTier = {
  id: "rookie" | "builder" | "sage";
  range: [number, number];
  label: string;
  headline: string;
  description: string;
  bullets: string[];
  appPitch: string;
};

const tiers: ResultTier[] = [
  {
    id: "rookie",
    range: [0, 3],
    label: "Sleep Rookie",
    headline: "Your sleep is carrying too much weight alone.",
    description:
      "You're not alone – most people were never taught how sleep really works. A few simple changes could dramatically upgrade your energy, mood, and focus.",
    bullets: [
      "Small tweaks to your routine can yield big results",
      "Understanding sleep science is the first step",
      "Building habits takes support – you don't have to do it alone",
    ],
    appPitch:
      "Sleepagotchi turns healthy sleep routines into a cozy game — quests, rewards, and a Dino that keeps you accountable.",
  },
  {
    id: "builder",
    range: [4, 7],
    label: "Sleep Builder",
    headline: "You're on the right track (with a few leaks).",
    description:
      "You already understand key ideas about sleep, but daily life makes them hard to follow. What you're missing isn't more information – it's a system that keeps you on track.",
    bullets: [
      "You know the fundamentals – consistency is your next level",
      "Small gaps in routine add up over time",
      "A structured approach will help you lock in gains",
    ],
    appPitch:
      "Sleepagotchi gives you that system: nightly check-ins, streaks, and rewards that make healthy sleep feel like progress in a cozy game.",
  },
  {
    id: "sage",
    range: [8, 10],
    label: "Sleep Sage",
    headline: "You're a sleep pro in the making.",
    description:
      "You've got the knowledge most people never get. The real win now is turning that knowledge into automatic, repeatable habits – even on busy, chaotic weeks.",
    bullets: [
      "Your knowledge is solid – now it's about consistency",
      "Automating good habits frees up mental energy",
      "Tracking progress keeps motivation high long-term",
    ],
    appPitch:
      "Sleepagotchi helps you lock in those habits with playful quests, streak protection, and a community that treats better sleep like a long-term adventure.",
  },
];

function getTier(score: number): ResultTier {
  return (
    tiers.find((tier) => score >= tier.range[0] && score <= tier.range[1]) ??
    tiers[0]
  );
}

// Check icon component
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function SleepTestClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;
  const progress = ((currentIndex + (showResults ? 1 : 0)) / total) * 100;

  const handleOptionClick = (index: number) => {
    if (showExplanation) return;
    setSelectedIndex(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedIndex === null) return;

    if (!showExplanation) {
      if (selectedIndex === currentQuestion.correctIndex) {
        setScore((s) => s + 1);
      }
      setShowExplanation(true);
      return;
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < total) {
      setCurrentIndex(nextIndex);
      setSelectedIndex(null);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setShowExplanation(false);
    setShowResults(false);
    setScore(0);
  };

  // Result screen
  if (showResults) {
    const tier = getTier(score);

    return (
      <div className="min-h-screen bg-gradient-to-b from-[#120624] via-[#1a0f3a] to-[#0d0618] flex items-center justify-center px-4 py-12">
        {/* Ambient glow effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative w-full max-w-2xl">
          {/* Main card */}
          <div className="rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-900/20 p-8 md:p-10">
            {/* Breadcrumb */}
            <div className="text-[11px] uppercase tracking-[0.2em] text-purple-300/70 mb-6">
              Sleepagotchi Demo · Sleep Test
            </div>

            {/* Score badge */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500/30 via-indigo-500/20 to-purple-600/30 flex items-center justify-center border border-purple-400/30 shadow-lg shadow-purple-500/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{score}</div>
                    <div className="text-sm text-purple-200/70">/ {total}</div>
                  </div>
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-xl -z-10" />
              </div>
              <div className="mt-4 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30">
                <span className="text-sm font-medium text-purple-200">
                  {tier.label}
                </span>
              </div>
            </div>

            {/* Headline and description */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {tier.headline}
              </h1>
              <p className="text-base text-slate-300/90 leading-relaxed max-w-lg mx-auto">
                {tier.description}
              </p>
            </div>

            {/* Bullet points */}
            <div className="bg-white/5 rounded-2xl border border-white/5 p-5 mb-8">
              <ul className="space-y-3">
                {tier.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center mt-0.5">
                      <CheckIcon className="w-3 h-3 text-purple-300" />
                    </span>
                    <span className="text-sm text-slate-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* App pitch */}
            <div className="bg-gradient-to-br from-purple-600/20 via-indigo-600/10 to-purple-700/20 rounded-2xl border border-purple-400/20 p-6 mb-6">
              <p className="text-sm md:text-base text-purple-100/90 leading-relaxed mb-5">
                {tier.appPitch}
              </p>

              {/* Promo code */}
              <div className="bg-black/30 rounded-xl border border-dashed border-purple-400/40 p-4 mb-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-purple-300/70 mb-1">
                      Promo Code — 1 Month Free
                    </div>
                    <div className="font-mono text-lg text-white font-semibold tracking-wide select-all">
                      SLEEPBETTER
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigator.clipboard?.writeText("SLEEPBETTER")}
                    className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium text-white transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>

              {/* CTA button */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                className="block w-full py-3.5 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 text-white font-semibold text-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:brightness-110 transition-all"
              >
                Get the App
              </a>
            </div>

            {/* Secondary actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleRestart}
                className="text-sm text-purple-300/80 hover:text-purple-200 transition-colors"
              >
                ← Retake the test
              </button>
              <Link
                href="/demo"
                className="text-sm text-purple-300/80 hover:text-purple-200 transition-colors"
              >
                Back to Wagmi Demos
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120624] via-[#1a0f3a] to-[#0d0618] flex items-center justify-center px-4 py-12">
      {/* Ambient glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative w-full max-w-2xl">
        {/* Main card */}
        <div className="rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-900/20 p-8 md:p-10">
          {/* Breadcrumb */}
          <div className="text-[11px] uppercase tracking-[0.2em] text-purple-300/70 mb-4">
            Sleepagotchi Demo · Sleep Test
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              How sleep-smart are your habits?
            </h1>
            <p className="text-sm md:text-base text-slate-400">
              A quick, science-based checkup on the routines that shape your
              nights. Answer honestly — this is for you, not for a doctor.
            </p>
          </div>

          {/* Progress section */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>
                Question {currentIndex + 1} of {total}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Category tag */}
            <div className="mt-3">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-medium text-purple-200">
                {currentQuestion.title}
              </span>
            </div>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-white leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedIndex === index;
              const isCorrect = index === currentQuestion.correctIndex;

              let cardClasses =
                "w-full text-left rounded-xl px-4 py-4 border transition-all duration-200 ";

              if (showExplanation) {
                if (isCorrect) {
                  cardClasses +=
                    "bg-emerald-500/15 border-emerald-400/60 text-emerald-100";
                } else if (isSelected && !isCorrect) {
                  cardClasses +=
                    "bg-red-500/10 border-red-400/50 text-red-200/90";
                } else {
                  cardClasses +=
                    "bg-white/5 border-white/10 text-slate-400 opacity-60";
                }
              } else if (isSelected) {
                cardClasses +=
                  "bg-purple-500/20 border-purple-400/60 text-white";
              } else {
                cardClasses +=
                  "bg-white/5 border-white/10 text-slate-100 hover:bg-white/10 hover:border-purple-400/40 cursor-pointer";
              }

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleOptionClick(index)}
                  disabled={showExplanation}
                  className={cardClasses}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm md:text-base">{option}</span>
                    {isSelected && !showExplanation && (
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <CheckIcon className="w-3 h-3 text-white" />
                      </span>
                    )}
                    {showExplanation && isCorrect && (
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                        <CheckIcon className="w-3 h-3 text-white" />
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mb-6 p-4 rounded-xl bg-indigo-500/10 border border-indigo-400/30">
              <div className="text-[10px] uppercase tracking-wider text-indigo-300/70 mb-1.5">
                Why this matters
              </div>
              <p className="text-sm text-indigo-100/90 leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/demo"
              className="text-sm text-purple-300/70 hover:text-purple-200 transition-colors"
            >
              ← Back to Wagmi Demos
            </Link>
            <button
              type="button"
              disabled={selectedIndex === null}
              onClick={handleSubmitAnswer}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                selectedIndex === null
                  ? "bg-white/10 text-slate-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:brightness-110"
              }`}
            >
              {showExplanation
                ? currentIndex === total - 1
                  ? "See my results"
                  : "Next"
                : "Check answer"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

