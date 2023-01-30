/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '5rem'
      },
      colors: {
        background1: '#5E80BB',
        btnColor1: '#4766AC',
        btnColor2: '#3F5E9B',
        btnColor3: '#EAEAEA',
        textColor1: '#343434',
        borderColor1: '##E7E7E7'
      }
    }
  },
  plugins: []
}
