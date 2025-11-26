"use client";

import React from "react";
import { Illustration } from "./Illustration";

type IntroScreenProps = {
  onStart: () => void;
};

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 animate-fade-in">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-accent-mint/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-accent-lavender/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-accent-butter/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md mx-auto text-center">
        {/* Hero Illustration */}
        <div className="mb-8">
          <Illustration variant="cat" size="lg" />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 leading-tight">
          Discover your{" "}
          <span className="bg-gradient-to-r from-primary-400 to-accent-coral bg-clip-text text-transparent">
            prediction style
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          A quick, no-right-answer profiler to match you with the markets you&apos;re
          naturally aligned with.
        </p>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="group relative bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold px-10 py-4 rounded-full shadow-button hover:shadow-card transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            Start the test
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>

        {/* Footer hint */}
        <p className="mt-8 text-sm text-gray-400">
          10 questions • Takes ~2 minutes
        </p>
      </div>
    </div>
  );
};

