module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins']
      },
      colors:{
        'black-grey':'#333',
        'veish':'#fdf2ff',
        'color-purple': '#3023AE'
      },
      backgroundImage: theme => ({
        'footer-texture': "url('./src/image/background.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
