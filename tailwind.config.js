/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend:{
      colors:{
        black_footer : '#1f1f1f'
      },
      fontFamily:{
        'Poppins': 'Poppins',
      },  
      keyframes:{
        affichage:{
          '0%': {transform: 'scale(.0)', opacity: 0},
          '30%, 50%':{transform: 'scale(1)', opacity: 1},
          '100%': {transform: 'scale(.0)', opacity: 0}
        },
      }
    },
    plugins: [],
  }
}

