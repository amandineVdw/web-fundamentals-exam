/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EEF5FD',
          light: '#F5F9FF',
          dark: '#DCE8F8'
        },
        secondary: {
          DEFAULT: '#A8E6CF',
          light: '#CFF6E4',
          dark: '#7FCFAA'
        },
        accent: {
          DEFAULT: '#4A90E2',
          light: '#78B0F5',
          dark: '#2D6FCC'
        },
        text: '#333333'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: []
}
