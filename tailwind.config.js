/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        script: ["Oleo Script", "cursive"],
      },
      colors: {
        primary: "#00A8CD",
        background: "#14181A",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin 15s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
