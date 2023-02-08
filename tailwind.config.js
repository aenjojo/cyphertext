/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'brutalism': '0.25rem 0.25rem 0 0 rgb(0 0 0 / 1)'
      }
    },
  },
  plugins: [],
}
