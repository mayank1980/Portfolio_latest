/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Anton', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        offwhite: '#f3f3f3',
      }
    },
  },
  plugins: [],
}