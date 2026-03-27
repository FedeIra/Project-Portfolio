/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0f18',
          dark: 'rgba(8, 14, 26, 0.95)',
          light: 'rgba(8, 14, 26, 0.55)',
        },
        accent: {
          green: '#22d3ee',
          success: '#0e7490',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      clipPath: {
        hexagon: 'polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
