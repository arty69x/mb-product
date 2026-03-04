/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: '1280px'
        }
      },
      colors: {
        primaryText: '#111111',
        secondaryText: '#666666',
        borderLight: '#e5e5e5',
        footerBg: '#000000',
        accent: '#d40000'
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  }
};
