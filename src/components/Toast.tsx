"use client";

import React, { useEffect } from "react";

type ToastProps = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
};

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-card border border-primary-100">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-accent-mint"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-gray-700 font-medium">{message}</span>
        </div>
      </div>
    </div>
  );
};

