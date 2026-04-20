/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5A2C8A', // Púrpura principal
        'primary-dark': '#4F207D', // Púrpura oscuro
        accent: '#FFB800', // Naranja/Amarillo de acento
        'bg-main': '#FDFBF8', // Fondo general
        'glass-white': 'rgba(255, 255, 255, 0.8)',
        'glass-border': 'rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        heading: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
