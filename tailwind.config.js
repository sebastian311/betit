/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        'above-1279': {'min': '1280px'},
      },
    },
  },
  plugins: [],
}

