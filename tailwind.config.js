/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5A2C8A', // Púrpura principal (del logo)
        'primary-dark': '#482454', // Púrpura oscuro exacto muestreado del logo
        accent: '#FC9C00', // Naranja exacto muestreado del logo (CTAs/energía)
        science: '#3BC6DC', // Turquesa muestreado del globo del logo (pilar de ciencia)
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
