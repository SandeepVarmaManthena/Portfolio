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
        scroll: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
  exports : {
    darkMode: ['selector', '[data-mode="dark"]'],
    lightMode: ['selector', '[data-mode="light"]'],
    
  }
}
