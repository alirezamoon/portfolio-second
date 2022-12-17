/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          lighter: "#a5a5a5",
          light: "#909096",
          main: "#282828",
          main2: "#252627",
          dark: "#1d1d1d",
          darker: "#181818",
          menu: "#808081",
        },
        teal: {
          main: "#0AD7B8",
        },
      },
      fontFamily: {
        logo: ["Bowlby One SC", "cursive"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(2em)" },
          "50%": { transform: "translateX(4em)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
