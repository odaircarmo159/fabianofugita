import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: "oklch(var(--card) / <alpha-value>)",
        border: "oklch(var(--border) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
        "muted-foreground": "oklch(var(--muted-foreground) / <alpha-value>)",
        accent: "oklch(var(--accent) / <alpha-value>)",
        "accent-foreground": "oklch(var(--accent-foreground) / <alpha-value>)",
        primary: "oklch(var(--primary) / <alpha-value>)",
        "primary-foreground": "oklch(var(--primary-foreground) / <alpha-value>)",
        secondary: "oklch(var(--secondary) / <alpha-value>)",
        "secondary-foreground": "oklch(var(--secondary-foreground) / <alpha-value>)",
        sage: "oklch(var(--sage) / <alpha-value>)",
        "sage-soft": "oklch(var(--sage-soft) / <alpha-value>)",
        forest: "oklch(var(--forest) / <alpha-value>)",
        ink: "oklch(var(--ink) / <alpha-value>)",
        bone: "oklch(var(--bone) / <alpha-value>)",
      },
      backgroundImage: {
        "paper-glow":
          "radial-gradient(circle at top left, oklch(var(--sage-soft) / 0.85), transparent 30%), radial-gradient(circle at top right, oklch(var(--sage) / 0.18), transparent 36%)",
        "page-glow":
          "radial-gradient(circle at top left, oklch(var(--sage-soft) / 0.85), transparent 30%), radial-gradient(circle at top right, oklch(var(--sage) / 0.18), transparent 36%)",
      },
      boxShadow: {
        care: "0 24px 60px -30px oklch(var(--forest) / 0.22)",
      },
      fontFamily: {
        sans: ["Inter Tight", "Inter", "ui-sans-serif", "sans-serif"],
        serif: ["Instrument Serif", "Cormorant Garamond", "ui-serif", "serif"],
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        blink: "blink 2.4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
