/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/javaScripts/**/*.js"],
  theme: {
    extend: {
      colors:{
        primary:'#044B7F',
        secondary:'#D3D3D3',
        inputSection:'#E4E4E4'
      },
      boxShadow: {
        custom: '0px 0px 5.2px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        Hedon_Regular: ['Hedon_Regular', 'sans-serif'], // Example with a self-hosted font
      },
    },
  },
  plugins: [],
}