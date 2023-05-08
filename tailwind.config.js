/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        dark: '#0f172a'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
