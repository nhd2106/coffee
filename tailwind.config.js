module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'circle': '50% 50%',
      }
    },
    fontFamily: {
      'body': ['"Open Sans"'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
