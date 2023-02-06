/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.php"],
  theme: {
    fontFamily: {
      'Special': ["Shrikhand", 'serif']
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
    },
    extend: {
      backgroundImage: {
        'hero-banner': "url('/assets/images/My favourite.JPG')",
      }
    },
  },
  plugins: [],
}
