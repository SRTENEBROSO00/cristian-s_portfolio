/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBlack: 'rgb(27,27,27)',
      },
      fontFamily: {
        italiana: ['Italiana', 'serif'], // Define la fuente
      },
      gridTemplateColumns:{
        15: 'repeat(15, minmax(0, 1fr))',
      },
      animation: {
        fadeOut : "fadeOut 2.5s ease-in-out forwards",
        fadeIn: "fadeIn .5s ease-in-out forwards"
      },
      keyframes : {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        moveUp: {
          '0%': {}
        }

      }
    },
  },
  plugins: [],
}


