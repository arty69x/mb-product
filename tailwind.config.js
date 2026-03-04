/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1280px'
        }
      },
      colors: {
        primaryText: '#111111',
        secondaryText: '#666666',
        borderLight: '#e5e5e5',
        footerBg: '#1a1a1a',
        accent: '#d40000',
        muted: '#f5f5f5',
        surfaceLight: '#fafafa'
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif']
      },
      letterSpacing: {
        widest: '0.2em'
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }]
      }
    }
  }
};
