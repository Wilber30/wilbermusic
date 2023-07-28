/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,php,js}", "./index.php", "./src/js/main.js", "./src/js/slick-init.js", "./templates/pages/about.php"],
  theme: {
    fontFamily: {
      'Special': ["Shrikhand", 'serif'],
      'Line': ['Noto Serif JP', 'serif'],
      'Button': ['Roboto Slab', 'cursive'],
      'Star': ['Codystar', 'cursive'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white-transparent': 'rgba(255,255,255, 0.7)',
      'antique': '#faebd7',
      'khaki': '#bdb76b',
      'old-gold': '#CFB53B',
      'black': '#000000',
      'brown': '#a52a2a',
      'biscuit': '#F2D2BD',
      'white': '#ffffff',
      'whitesmoke': '#f5f5f5',
      'off-white': '#fff5f5',
      'antique-white': '#faebd7',
      'red': '	#EE4B2B',
      'plant-red': '#C70039',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'blue-grey': '#7393B3',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'grey': '#D8D8D8',
      'pewter': '#899499',
      'silver': '#C0C0C0',
      'dark-grey': '#787878',
      'dark-sea-green': '#8fbc8f',
      'viridian': '#007f5c',
      'laurel': '#a9ba9d',
      'mid-laurel': '#92a883',
      'dark-laurel': '#869e75',
      'darkest-laurel': '#6A6C3C',
      'leafy': '#009353',
      'firebrick': '#b22222',
      'salmon': '#BF565A',
    },
    extend: {
      backgroundImage: {
        'hero-banner': "url('/assets/images/favourite.jpeg')",
        'hero-test1': "url('/assets/images/test-photo1.jpeg')",
        'hero-test2': "url('/assets/images/test-photo2.jpeg')",
        'about-hero': "url('/assets/images/instruments.jpeg')",
        'wood-grain': "url('/assets/images/woodgrain-1.jpg')",
        'wood-grain-2': "url('/assets/images/woodgrain-2.jpg')",
        'wood-grain-3': "url('/assets/images/woodgrain-3.jpg')",
        'leaves': "url('/assets/images/leaves-bg.jpg')",
        'leaves-2': "url('/assets/images/leaves-2.jpg')",
        'wood-diamond': "url('/assets/images/woody-diamond.jpg')"
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
