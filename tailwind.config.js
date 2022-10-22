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
          dark: "#1d1d1d",
          darker: "#181818",
        },
        teal: {
          main: "#0AD7B8",
        },
      },
    },
  },
  plugins: [],
}
