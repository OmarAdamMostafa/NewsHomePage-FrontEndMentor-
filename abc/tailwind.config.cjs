/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["Inter", "sans-serif"],
      },
      colors: {
        hoverOrange: '#E9AB53',
        hoverRed: '#F15E50'
      }
    },
  },
  plugins: [],
}
