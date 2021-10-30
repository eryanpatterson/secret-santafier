module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      outline: {
        green: '3px solid #34D399'
      }
    },
    fontFamily: {
      'display': ['Antonio', 'Oswald', 'ui-sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
