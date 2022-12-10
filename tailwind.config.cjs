/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-blue' : '#325cd5',
      },
      fontFamily: {
        'firacode' : ['Firacode', 'monospace'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
