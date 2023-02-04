/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'nav-btn': '#403372',
        'nav-bg': '#10004F'
      }
    }
  },
  plugins: []
}
