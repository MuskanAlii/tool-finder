/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, #341768 0%, #11031d 33%, #060220 66%, #122f45 100%)',
        'hero-gradient': 'linear-gradient(90deg, #1e0029 0%, #5e2173 40%, #792bce 60%, #38bdf8 100%)',
      
    },
      fontFamily: {
        inter:['Inter']
      },

      keyframes: {
        'border-glow': {
          '0%': {
            boxShadow: '0 0 4px 1px rgba(114, 67, 230, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 3px 1px rgba(114, 67, 230, 0.2)',
          },
          '100%': {
            boxShadow: '0 0 2px 1px rgba(114, 67, 230, 0.5)',
          },
        },
      },
      animation: {
        'border-glow': 'border-glow 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}

