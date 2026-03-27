/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#172139',
          dark: 'rgba(4, 1, 19, 0.9)',
          light: 'rgba(4, 1, 19, 0.5)',
        },
        accent: {
          green: '#2ECC71',
          success: '#006C00',
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
