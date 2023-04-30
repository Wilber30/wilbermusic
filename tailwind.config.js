/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,php,js}", "./index.php", "./src/js/main.js", "./templates/pages/about.php"],
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
      'khaki': '#bdb76b',
      'black': '#000000',
      'brown': '#a52a2a',
      'biscuit': '#F2D2BD',
      'white': '#ffffff',
      'whitesmoke': '#f5f5f5',
      'off-white': '#fff5f5',
      'red': '	#EE4B2B',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'grey': '#D8D8D8',
      'dark-grey': '#787878',
    },
    extend: {
      backgroundImage: {
        'hero-banner': "url('/assets/images/favourite.jpeg')",
        'about-hero': "url('/assets/images/instruments.jpeg')"
      },
      maxWidth: {
        '2/5': '40%',
      },
      keyframes: {
        'fade-in-text': {
          '0%': { 
            opacity: '0' 
          },
          '100%': { 
            opacity: '1'
          },
        },
      },
      animation: {
        'fade-in-text': 'fade-out-text 0.5s ease-out',
      },
    },
  },
  plugins: []
}
