const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f9f9a5',
        'secondary': '#f5f570', 
      },
    },
  },
  plugins: [],
}