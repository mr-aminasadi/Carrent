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
      },
      screens: {
        'xsm': '480px',
      },
      colors:{
        'primary':{
          500:'#3563E9',
        },
        'secondary':{
          300:'#90A3BF',
          400:'#596780',
          500:'#1A202C',
        }
      }
    },
    fontFamily:{
      plus:['Plus Jakarta Sans','sans-serif']
    },
   
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

