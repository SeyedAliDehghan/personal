/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#FDAA1E'
      },
      fontFamily:{
        primary:'ptsans'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}