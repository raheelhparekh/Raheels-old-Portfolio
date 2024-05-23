/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
      },
      darkMode: 'class', // Enable dark mode based on the class name
      colors: {
        // Define your black and white theme colors here
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
