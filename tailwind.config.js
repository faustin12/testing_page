module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'grey-pattern': "url(/homeBackground.jpg)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
