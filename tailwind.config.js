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
      }
    },
  },
  plugins: [],
  exports : {
    darkMode: ['selector', '[data-mode="dark"]'],
    lightMode: ['selector', '[data-mode="light"]'],
    
  }
}
