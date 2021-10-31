module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900
      },
      fontFamily: {
        body: ['"Roboto"']
      },
      scale: {
        mirror: "-1"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
