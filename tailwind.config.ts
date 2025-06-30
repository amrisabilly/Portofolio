import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oleo Script", "system-ui"],
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8ecdff",
          400: "#59b0ff",
          500: "#3490ff", // primary blue
          600: "#1f73ff",
          700: "#1960e5",
          800: "#1c4fcb",
          900: "#1d44a0",
          950: "#172a61",
        },
        accent: {
          50: "#fbf1ff",
          100: "#f6e5ff",
          200: "#efcaff",
          300: "#e69fff",
          400: "#d968fd",
          500: "#c537ed", // accent purple
          600: "#ad27ce",
          700: "#911ca8",
          800: "#791a89",
          900: "#651a70",
          950: "#410b4a",
        },
        dark: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5dae3",
          300: "#b1bac8",
          400: "#8694a7",
          500: "#66758b",
          600: "#4f5b71",
          700: "#41495c",
          800: "#36404e", // dark background
          900: "#131c2e",
          950: "#0b111e",
        },
      },
      backgroundColor: {
        primary: "#3490ff",
        secondary: "#c537ed",
        black: "#0b111e",
        white: "#FFFFFF",
      },
      textColor: {
        primary: "#3490ff",
        secondary: "#c537ed",
        black: "#131c2e",
        white: "#FFFFFF",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin 15s linear infinite reverse",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
