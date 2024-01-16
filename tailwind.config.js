/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': 'Montserrat',
    },
    extend: {
      container: {
        center: true,
        padding: '20px'
      },
      colors: {
        primary: '#F7931F'
      }
    },
  },
  plugins: [],
}

