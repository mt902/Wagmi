"use client";

import React from "react";

type IllustrationProps = {
  variant?: "cat" | "stars" | "chart" | "crystal";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export const Illustration: React.FC<IllustrationProps> = ({
  variant = "cat",
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-32 h-32",
    lg: "w-48 h-48",
  };

  const renderIllustration = () => {
    switch (variant) {
      case "cat":
        return (
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
            {/* Soft blob background */}
            <ellipse
              cx="60"
              cy="65"
              rx="45"
              ry="40"
              fill="url(#catGradient)"
              className="animate-pulse"
            />
            {/* Cat body */}
            <ellipse cx="60" cy="70" rx="35" ry="30" fill="#FFE0EC" />
            {/* Cat head */}
            <circle cx="60" cy="45" r="25" fill="#FFE0EC" />
            {/* Left ear */}
            <path
              d="M38 30 L42 50 L52 40 Z"
              fill="#FFE0EC"
              stroke="#FFCCD8"
              strokeWidth="2"
            />
            {/* Right ear */}
            <path
              d="M82 30 L78 50 L68 40 Z"
              fill="#FFE0EC"
              stroke="#FFCCD8"
              strokeWidth="2"
            />
            {/* Inner ears */}
            <path d="M42 35 L44 45 L50 40 Z" fill="#FFB3C4" />
            <path d="M78 35 L76 45 L70 40 Z" fill="#FFB3C4" />
            {/* Eyes */}
            <ellipse cx="50" cy="45" rx="5" ry="6" fill="#2D3748" />
            <ellipse cx="70" cy="45" rx="5" ry="6" fill="#2D3748" />
            {/* Eye highlights */}
            <circle cx="52" cy="43" r="2" fill="white" />
            <circle cx="72" cy="43" r="2" fill="white" />
            {/* Nose */}
            <ellipse cx="60" cy="52" rx="3" ry="2" fill="#FF99B0" />
            {/* Mouth */}
            <path
              d="M55 56 Q60 60 65 56"
              stroke="#FF99B0"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Whiskers */}
            <line
              x1="30"
              y1="50"
              x2="45"
              y2="52"
              stroke="#FFCCD8"
              strokeWidth="1.5"
            />
            <line
              x1="30"
              y1="55"
              x2="45"
              y2="55"
              stroke="#FFCCD8"
              strokeWidth="1.5"
            />
            <line
              x1="75"
              y1="52"
              x2="90"
              y2="50"
              stroke="#FFCCD8"
              strokeWidth="1.5"
            />
            <line
              x1="75"
              y1="55"
              x2="90"
              y2="55"
              stroke="#FFCCD8"
              strokeWidth="1.5"
            />
            {/* Sparkles */}
            <circle cx="25" cy="25" r="3" fill="#FFD93D" className="animate-ping" />
            <circle cx="95" cy="30" r="2" fill="#B4A7D6" className="animate-ping" style={{ animationDelay: "0.5s" }} />
            <circle cx="90" cy="85" r="2.5" fill="#7DD3C0" className="animate-ping" style={{ animationDelay: "1s" }} />
            <defs>
              <radialGradient id="catGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFE5D9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E8F5F0" stopOpacity="0.3" />
              </radialGradient>
            </defs>
          </svg>
        );
      case "stars":
        return (
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
            <circle cx="60" cy="60" r="50" fill="url(#starsGradient)" />
            {/* Stars */}
            <path
              d="M60 20 L63 35 L78 35 L66 45 L70 60 L60 50 L50 60 L54 45 L42 35 L57 35 Z"
              fill="#FFD93D"
              className="animate-pulse"
            />
            <path
              d="M30 50 L32 58 L40 58 L34 63 L36 71 L30 66 L24 71 L26 63 L20 58 L28 58 Z"
              fill="#FF99B0"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <path
              d="M85 55 L87 63 L95 63 L89 68 L91 76 L85 71 L79 76 L81 68 L75 63 L83 63 Z"
              fill="#7DD3C0"
              className="animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
            <circle cx="45" cy="80" r="4" fill="#B4A7D6" />
            <circle cx="75" cy="85" r="3" fill="#87CEEB" />
            <circle cx="60" cy="90" r="2" fill="#FFE0EC" />
            <defs>
              <radialGradient id="starsGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E8E0F0" />
                <stop offset="100%" stopColor="#E0F0F8" stopOpacity="0.5" />
              </radialGradient>
            </defs>
          </svg>
        );
      case "chart":
        return (
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
            <rect x="15" y="15" width="90" height="90" rx="20" fill="url(#chartGradient)" />
            {/* Chart bars */}
            <rect x="25" y="60" width="15" height="35" rx="5" fill="#7DD3C0" />
            <rect x="45" y="40" width="15" height="55" rx="5" fill="#B4A7D6" />
            <rect x="65" y="50" width="15" height="45" rx="5" fill="#FF99B0" />
            <rect x="85" y="30" width="15" height="65" rx="5" fill="#FFD93D" />
            {/* Sparkle */}
            <circle cx="92" cy="25" r="4" fill="#FF99B0" className="animate-ping" />
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDF8F3" />
                <stop offset="100%" stopColor="#E8F5F0" />
              </linearGradient>
            </defs>
          </svg>
        );
      case "crystal":
        return (
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
            <ellipse cx="60" cy="65" rx="45" ry="40" fill="url(#crystalGradient)" />
            {/* Crystal */}
            <path
              d="M60 20 L80 50 L70 95 L50 95 L40 50 Z"
              fill="url(#crystalFill)"
              stroke="#E8E0F0"
              strokeWidth="2"
            />
            <path d="M60 20 L60 95" stroke="#E8E0F0" strokeWidth="1" opacity="0.5" />
            <path d="M40 50 L80 50" stroke="#E8E0F0" strokeWidth="1" opacity="0.5" />
            {/* Sparkles */}
            <circle cx="30" cy="40" r="3" fill="#FFD93D" className="animate-ping" />
            <circle cx="90" cy="45" r="2" fill="#FF99B0" className="animate-ping" style={{ animationDelay: "0.5s" }} />
            <circle cx="85" cy="80" r="2.5" fill="#7DD3C0" className="animate-ping" style={{ animationDelay: "1s" }} />
            <defs>
              <radialGradient id="crystalGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E8E0F0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#E0F0F8" stopOpacity="0.2" />
              </radialGradient>
              <linearGradient id="crystalFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8E0F0" />
                <stop offset="50%" stopColor="#B4A7D6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${sizeClasses[size]} ${className} animate-float`}>
      {renderIllustration()}
    </div>
  );
};

