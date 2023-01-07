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
          tag: "#515152",
          1000: "#8d8d8d",
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
        leftToRight: {
          "0%": { transform: "translate(0)" },
          "25%": { transform: "translateY(100%)" },
          "50%": {
            transform: "translateY(100%) translateX(100%)",
            background: "#00F",
          },
          "75%": { transform: "translateX(100%)" },
          "100%": { transform: "translate(0)" },
        },
        sidebarOpen: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        sidebarClose: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        opacity: {
          "0%": { opacity: 0, visibility: "hidden" },
          "50%": { opacity: 0, visibility: "hidden" },
          "100%": { opacity: 1, visibility: "visible" },
        },
        opacityR: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, visibility: "hidden" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        leftToRight: "leftToRight 3s ease-in-out forwards infinite",
        sidebarOpen: "sidebarOpen .5s ease-in-out forwards",
        sidebarClose: "sidebarClose .5s ease-in-out forwards",
        opacity: "opacity 1s ease-in-out forwards",
        opacityR: "opacityR 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}
