/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#881337",
        secondary: "#475569",
        black: "#0F172A",
        white: "#ffffff",
        gray: "#475569",
        bg: "#F1F5F9",
        link: "#2563EB",
      },
    },
  },
  plugins: [],
}

