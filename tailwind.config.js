/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8E44AD',
        secondary: '#121212',
        ternary: '#95A5A6',
        secondprimary: '#1DA1F2',
        secondsecondary: '#14171A',
        secondternary: '#E1E8ED'
      },
    },
  },
  plugins: [],
}

