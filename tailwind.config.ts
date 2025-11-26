import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MEW-inspired pastel palette
        mew: {
          mint: "#E8F5F0",
          cream: "#FDF8F3",
          peach: "#FFE5D9",
          lavender: "#E8E0F0",
          sky: "#E0F0F8",
          blush: "#FFE0EC",
          sage: "#D4E8D4",
          butter: "#FFF5D6",
        },
        primary: {
          50: "#FFF5F7",
          100: "#FFE0E8",
          200: "#FFCCD8",
          300: "#FFB3C4",
          400: "#FF99B0",
          500: "#FF809C",
          600: "#E66688",
          700: "#CC4D74",
          800: "#B33360",
          900: "#99194C",
        },
        accent: {
          mint: "#7DD3C0",
          coral: "#FF9B85",
          lavender: "#B4A7D6",
          sky: "#87CEEB",
          butter: "#FFD93D",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        card: "0 8px 32px rgba(0, 0, 0, 0.08)",
        button: "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.4s ease-out",
        "bounce-soft": "bounceSoft 2s infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(5deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

