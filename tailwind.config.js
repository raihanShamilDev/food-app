/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "green": "#39DB4A",
        "red": "#FF6868",
        "secondary": "#555",
        "prigmayBG": "#FCFCFC"
      },
      fontFamily:{
        "primary" : ['Saira Extra Condensed', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}