"use client";

import React, { useState, useCallback } from "react";
import { Profile } from "@/types";
import { Illustration } from "./Illustration";
import { Toast } from "./Toast";

type ResultScreenProps = {
  profile: Profile;
  onRestart: () => void;
};

export const ResultScreen: React.FC<ResultScreenProps> = ({
  profile,
  onRestart,
}) => {
  const [showToast, setShowToast] = useState(false);

  const handleShareTwitter = useCallback(() => {
    const text = encodeURIComponent(
      `I just discovered my prediction style on PreDiva: ${profile.name} — which markets fit yours?`
    );
    const url = encodeURIComponent(
      typeof window !== "undefined" ? window.location.href : ""
    );
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  }, [profile.name]);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setShowToast(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col px-6 py-8 animate-fade-in">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${profile.bgGradient} opacity-50`}
        />
        <div
          className="absolute top-20 right-10 w-48 h-48 rounded-full blur-3xl opacity-40"
          style={{ backgroundColor: profile.color }}
        />
        <div
          className="absolute bottom-40 left-10 w-40 h-40 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: profile.color }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center max-w-lg mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">
            Your prediction style is
          </p>
        </div>

        {/* Profile Card */}
        <div className="w-full bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-card mb-8 animate-slide-up">
          {/* Icon and Name */}
          <div className="flex flex-col items-center mb-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-soft"
              style={{ backgroundColor: `${profile.color}30` }}
            >
              {profile.icon}
            </div>
            <h1
              className="text-3xl font-bold mb-2"
              style={{ color: profile.color }}
            >
              {profile.name}
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-center text-lg leading-relaxed mb-8">
            {profile.shortDescription}
          </p>

          {/* Recommended Markets */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">
              Recommended markets for you
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {profile.recommendedMarkets.map((market, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    backgroundColor: `${profile.color}20`,
                    color: profile.color,
                    border: `1px solid ${profile.color}40`,
                  }}
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <button
          className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold px-8 py-4 rounded-2xl shadow-button hover:shadow-card transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mb-8"
          onClick={() => alert("Explore markets feature coming soon!")}
        >
          <span className="flex items-center justify-center gap-2">
            Explore markets that fit your style
            <svg
              className="w-5 h-5"
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

        {/* Share Section */}
        <div className="w-full bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft mb-6">
          <h3 className="text-lg font-semibold text-gray-700 text-center mb-4">
            Share your prediction style
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Share on X Button */}
            <button
              onClick={handleShareTwitter}
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on X
            </button>

            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy link
            </button>
          </div>
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="text-gray-400 hover:text-gray-600 font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Restart test
        </button>
      </div>

      {/* Toast */}
      <Toast
        message="Link copied!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

