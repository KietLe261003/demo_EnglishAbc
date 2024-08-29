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
        },
        slate: {
          400: "#F3F3F3",
        },
        gray: {
          300: "#ECEBE9"
        }
      }
    },
  },
  plugins: [],
}