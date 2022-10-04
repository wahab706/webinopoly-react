/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'purple': '#7e5bef',
      'pink': '#e7277c',
      'light-pink': '#c84686',
      'lighter-pink': '#FBEDF2',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray': '#A8A9AB',
      'gray-light': '#d3dce6',
      'gray-dark': '#273444',
      'parrot': '#60C77C',
      'light-parrot': '#65D656',
      'blue': '#041143',
      'dark-blue': '#120D45',
      'black': '#000000',
      'light-black': '#929292',
      'lighter-black': '#646464',
      'half-black': '#343b39',
      'half-black-light': '#3b3b3b',
      'light-gray': '#8A8FA1',
      'black-modal': 'rgba(0,0,0,.8)',
      'semi-black': '#3A3F52',
      'slate': '#EEEEEE',
      'white': '#ffffff',
      'half-white': '#F3F4F8',
      'half-white-light': '#F7F8FB',
    },
    extend: {
      backgroundImage: {
        'hero-image': 'url(./src/assets/banner1.png)'
      },
      spacing: {
        
        '18': '4.5rem',
        '98': '26rem',
        '99': '27rem',
        '100': '28rem',
        '101': '29rem',
        '102': '30rem',
        '104': '32rem',
        '108': '36rem',
        '112': '40rem',
        '114': '42rem',
        '116': '44rem',
        '120': '48rem',
        '124': '52rem',
        '128': '56rem',
        '132': '60rem',
        '136': '64rem',
        '140': '68rem',
      },
      screens: {
        'mini': '320px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    fontFamily: {
      'work-sans': ['Work Sans', 'sans-serif'],
    },

    letterSpacing: {
      wide: '.025em',
      wider: '.07em',
      widest: '.1em',
      // widest: '.25em',
    }
  },
  plugins: [require('@tailwindcss/typography')],
}