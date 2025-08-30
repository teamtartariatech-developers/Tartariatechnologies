/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          silver: '#E0E0E0',
        },
        accent: {
          blue: '#00F0FF',
          purple: '#6A00F4',
          green: '#00FFA3',
          gray: '#7D7D7D',
        },
        success: {
          light: '#ECFDF5',
          DEFAULT: '#10B981',
          dark: '#064E3B',
        },
        warning: {
          light: '#FFFBEB',
          DEFAULT: '#F59E0B',
          dark: '#78350F',
        },
        error: {
          light: '#FEF2F2',
          DEFAULT: '#EF4444',
          dark: '#7F1D1D',
        },
      },
      fontFamily: {
        'heading': ['"Bebas Neue"', 'sans-serif'],
        'subheading': ['"Neue Haas Grotesk"', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};