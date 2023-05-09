/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { width: '0%'},
          '10%': { width: '10%'},
          '20%': { width: '20%'},
          '100%': { width: '100%'},
        },
        fadeIn: {
          '0%': { opacity: 0},
          '90%': { opacity: 0},
          '100%': { opacity: 1},
        },
        fadeInCard: {
          '0%': { opacity: 0},
          '100%': { opacity: 1},
        }
      },
      animation: {
        'waving-item-menu': 'wave 0.7s linear forwards',
        'waving-timeline': 'wave 5s linear forwards',
        'fadeInPoints-timeline-1': 'fadeIn 1.5s linear forwards',
        'fadeInPoints-timeline-2': 'fadeIn 3s linear forwards',
        'fadeInPoints-timeline-3': 'fadeIn 4.5s linear forwards',
        'fadeInPoints-timeline-4': 'fadeIn 6s linear forwards',
        'fadeInCard': 'fadeInCard 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

