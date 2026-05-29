import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
        nexo: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          cyan: "#22d3ee",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "gradient-hero":
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 50%), radial-gradient(circle at 80% 30%, rgba(139,92,246,0.25), transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139, 92, 246, 0.35)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glowPulse: "glowPulse 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
