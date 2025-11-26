"use client";

import React from "react";
import { Question, Option } from "@/types";
import { Illustration } from "./Illustration";

type QuestionScreenProps = {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (option: Option) => void;
};

const illustrationVariants: Array<"cat" | "stars" | "chart" | "crystal"> = [
  "stars",
  "chart",
  "crystal",
  "cat",
];

const colorSchemes = [
  { bg: "bg-primary-50/50", accent: "hover:bg-primary-100 hover:border-primary-300" },
  { bg: "bg-mew-mint/50", accent: "hover:bg-mew-mint hover:border-accent-mint" },
  { bg: "bg-mew-lavender/50", accent: "hover:bg-mew-lavender hover:border-accent-lavender" },
  { bg: "bg-mew-butter/50", accent: "hover:bg-mew-butter hover:border-accent-butter" },
  { bg: "bg-mew-peach/50", accent: "hover:bg-mew-peach hover:border-accent-coral" },
  { bg: "bg-mew-sky/50", accent: "hover:bg-mew-sky hover:border-accent-sky" },
];

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
}) => {
  const illustrationVariant = illustrationVariants[currentIndex % illustrationVariants.length];
  const colorScheme = colorSchemes[currentIndex % colorSchemes.length];

  return (
    <div className="min-h-screen flex flex-col px-6 py-8 animate-slide-in-right">
      {/* Progress bar */}
      <div className="w-full max-w-md mx-auto mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400 font-medium">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="text-sm text-gray-400">
            {Math.round(((currentIndex + 1) / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-300 to-primary-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center max-w-lg mx-auto w-full">
        {/* Illustration */}
        <div className="mb-6">
          <Illustration variant={illustrationVariant} size="sm" />
        </div>

        {/* Question Card */}
        <div className={`w-full ${colorScheme.bg} rounded-3xl p-6 mb-8 shadow-soft`}>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center leading-relaxed">
            {question.title}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="w-full space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              className={`w-full text-left p-5 rounded-2xl border-2 border-gray-100 bg-white/80 backdrop-blur-sm shadow-soft transition-all duration-200 ${colorScheme.accent} hover:shadow-card hover:scale-[1.02] active:scale-[0.98]`}
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-sm font-semibold text-gray-400">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-gray-700 font-medium leading-relaxed pt-1">
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

