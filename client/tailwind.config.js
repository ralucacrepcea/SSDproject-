/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Modificare: "/" include toate subdirectoarele
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}