///** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './src/**/*.{js,jsx,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
