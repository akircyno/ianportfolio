import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        brand: {
          bg: "#0A0A0F",
          surface: "#111118",
          card: "#16161F",
          border: "#1E1E2E",
          accent: "#00F5FF",
          "accent-glow": "rgba(0,245,255,0.15)",
          "accent-2": "#7C3AED",
          text: "#E2E8F0",
          muted: "#64748B",
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin 30s linear infinite reverse",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
