import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /** KLFPRO fintech marketplace primary (matches #22c55e) */
        fintech: {
          DEFAULT: "#22c55e",
          dark: "#0f172a",
          muted: "#64748b"
        },
        brand: {
          50: "#fff8eb",
          100: "#feefc7",
          200: "#fddd8a",
          300: "#fbc44b",
          400: "#f9ad1f",
          500: "#f59e0b",
          600: "#dd7602",
          700: "#b75406",
          800: "#94410c",
          900: "#7a360d"
        },
        surface: {
          light: "#f8fafc",
          dark: "#0f172a"
        }
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      }
    }
  },
  plugins: []
};

export default config;
