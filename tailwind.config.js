/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,php,js}", "./index.php", "./src/js/main.js"],
  theme: {
    fontFamily: {
      'Special': ["Shrikhand", 'serif'],
      'Line': ['Noto Serif JP', 'serif'],
      'Button': ['Roboto Slab', 'cursive']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'antique': '#faebd7',
      'biscuit': '#F2D2BD',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'grey': '#D8D8D8',
      'dark-grey': '#787878'
    },
    extend: {
      backgroundImage: {
        'hero-banner': "url('/assets/images/My favourite.JPG')",
      },
      keyframes: {
        'small-open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },

      },
      animation: {
        'small-open-menu': 'small-open-menu 0.5s ease-in-out forwards',
      }
     },
    },
  }
  plugins: []

