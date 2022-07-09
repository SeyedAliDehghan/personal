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
        yekan:'yekanbakh'
      }
    },
  },
  plugins: [],
}
