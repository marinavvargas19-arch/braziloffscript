/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:    { 50: "#fbf5e7", DEFAULT: "#ede4d3" },
        paper:    "#fbf5e7",
        ink:      { soft: "#2c4031", DEFAULT: "#19281e" },
        muted:    "#6a6557",
        line:     "#ddd2b6",
        leaf:     { DEFAULT: "#1f4a2f", d: "#143521", l: "#2c6440" },
        terra:    { DEFAULT: "#e07a4e", d: "#c46439", l: "#ed9871" },
        gold:     "#e8b53d",
        azul:     "#2d5a8a",
        vermelho: "#c14437",
      },
      fontFamily: {
        serif: ['var(--font-serif)', "Georgia", "serif"],
        sans:  ['var(--font-sans)',  "system-ui", "sans-serif"],
      },
      backgroundColor: {
        cream: "#ede4d3",
      },
    },
  },
  plugins: [],
};
