// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      rubik: ['Rubik'],
    },
    extend: {
      colors: {
        pink: '#ED028C',
        grey: '#6F6F6F',
        cBlack: '#212121',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
