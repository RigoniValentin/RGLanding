import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
        screens: {
          lg: "1200px",
        },
      },
      colors: {
        "rio-dark":   "#0B0C0F",
        "rio-panel":  "#14161B",
        "rio-soft":   "#1E1F23",
        "rio-gold":   "#EABD23",
        "rio-gold-2": "#F8D766",
        "rio-light":  "#F5F5F5",
      },
      boxShadow: {
        gold:        "0 0 24px rgba(234,189,35,0.35), 0 0 64px rgba(234,189,35,0.18)",
        "gold-lg":   "0 0 36px rgba(234,189,35,0.55), 0 0 120px rgba(234,189,35,0.28)",
        "inner-gold":"inset 0 0 0 1px rgba(234,189,35,0.25)",
      },
      backgroundImage: {
        "grid-gold":
          "linear-gradient(rgba(234,189,35,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(234,189,35,0.05) 1px, transparent 1px)",
        "shine-gold":
          "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
        "radial-gold":
          "radial-gradient(circle at 50% 50%, rgba(234,189,35,0.35) 0%, rgba(234,189,35,0) 70%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        marquee: {
          "0%":   { transform: "translateX(-66.666%)" },
          "100%": { transform: "translateX(0)" },
        },
        "marquee-ltr": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-66.666%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(234,189,35,0.5)" },
          "50%":      { boxShadow: "0 0 0 18px rgba(234,189,35,0)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        sparkle: {
          "0%, 100%": { transform: "scale(0) rotate(0deg)",  opacity: "0" },
          "50%":      { transform: "scale(1) rotate(180deg)", opacity: "1" },
        },
        "border-rotate": {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "shine-sweep": {
          "0%":   { transform: "translateX(-150%) skewX(-12deg)" },
          "100%": { transform: "translateX(250%) skewX(-12deg)" },
        },
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%":           { transform: "rotate(0.6deg)" },
          "75%":           { transform: "rotate(-0.6deg)" },
        },
        "scan-line": {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        shimmer:        "shimmer 3s linear infinite",
        float:          "float 4s ease-in-out infinite",
        marquee:        "marquee 40s linear infinite",
        "marquee-ltr":  "marquee-ltr 55s linear infinite",
        "pulse-glow":   "pulse-glow 2.4s ease-out infinite",
        "gradient-x":   "gradient-x 6s ease infinite",
        sparkle:        "sparkle 4s ease-in-out infinite",
        "border-rotate":"border-rotate 8s linear infinite",
        "shine-sweep":  "shine-sweep 2.8s ease-in-out infinite",
        "fade-in-up":   "fade-in-up 0.7s ease-out forwards",
        tilt:           "tilt 10s ease-in-out infinite",
        "scan-line":    "scan-line 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
