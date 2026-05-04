import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ibpe: {
          orange: "#F25C05",
          dark: "#2F343A",
          muted: "#6B6F75",
          line: "#E7E9EC",
          soft: "#F7F8FA",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        technical: "0 20px 60px rgba(47, 52, 58, 0.10)",
        card: "0 12px 34px rgba(47, 52, 58, 0.08)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, rgba(47,52,58,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(47,52,58,0.07) 1px, transparent 1px)",
        "radar-ring":
          "radial-gradient(circle at center, transparent 0 32%, rgba(242,92,5,0.14) 33% 34%, transparent 35% 52%, rgba(47,52,58,0.10) 53% 54%, transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
