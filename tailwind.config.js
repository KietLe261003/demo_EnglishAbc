/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          300: "#FFF4E5",
          700: "#FB9400"
        }
      }
    },
  },
  plugins: [],
}