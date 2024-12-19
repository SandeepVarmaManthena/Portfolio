/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik Doodle Shadow', 'sans-serif'],
      serif: ['Teko', 'serif'],
    },
    extend: {},
  },
  plugins: [],
  exports : {
    darkMode: ['selector', '[data-mode="dark"]'],
    lightMode: ['selector', '[data-mode="light"]'],
    
  }
}
