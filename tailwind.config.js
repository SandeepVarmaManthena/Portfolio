
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Revalia', 'sans-serif'],
      serif: ['Teko', 'serif'],
    },
    extend: {
      colors : {
        'cont-color' : '#18171C',
      },
      keyframes:{
        spinning: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scrolling: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollingReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'spin-slow': 'spinning 2s linear infinite',
        'scroll': 'scrollingReverse 50s linear infinite reverse',
        'scrollReverse': 'scrollingReverse 24s linear infinite',
      },
      boxShadow: {
        '3xl': '6px 0 4px -4px #0AFE92, -6px 0 4px -4px #0AFE92;',
        '4xl': '2px 2px 2px -1px #0AFE92',
      },
    },
  },
  plugins: [],
  exports : {
    darkMode: ['selector', '[data-mode="dark"]'],
    lightMode: ['selector', '[data-mode="light"]'],
    
  }
}
