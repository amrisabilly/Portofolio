import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        logo:["Oleo Script", "system-ui"],
        primary: ["Poppins", "sans-serif"]
      },
      backgroundColor:{
        "primary": "#00A8CD",
        "secondary": "#87E9FE",
        "black": "#14181A",
        "white": "#FFFFFF",
      },
      textColor:{
        "primary": "#00A8CD",
        "secondary": "#87E9FE",
        "black": "#14181A",
        "white": "#FFFFFF",
      }
    },
  },
  plugins: [],
} satisfies Config;
