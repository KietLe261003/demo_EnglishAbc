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
          300: "#ECEBE9",
          200: "#F9F9F9",
          400:"#9E988F"
        }
        ,
        grey: {
          100: "#f9f9f9"
        }
      }
    },
  },
  plugins: [],
}