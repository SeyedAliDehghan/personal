/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor:'#0A192F',
        secondaryBgColor:'#112541',
        primaryColor:'#64ffda',
        secondaryColor:'#CCD6F6',
        thirdColor:'#8892b0',
        mainTextColor:'#8892b0'
      },
      fontFamily:{
        roboto:['Roboto Mono', 'monospace'],
        sans:["Radio Canada",'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
