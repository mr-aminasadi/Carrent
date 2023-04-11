/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        '123': '31rem',
        '160': '38rem'
      }
    },
    fontFamily:{
      plus:['Plus Jakarta Sans','sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

