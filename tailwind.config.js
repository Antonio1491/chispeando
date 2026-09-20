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
        'deep-blue': '#20276B', // Azul profundo para el degradado morado/azul del hero
        'bg-main': '#FDFBF8', // Fondo general
        'glass-white': 'rgba(255, 255, 255, 0.8)',
        'glass-border': 'rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        heading: ['Fredoka', 'sans-serif'],
      },
      keyframes: {
        'sparkle-pop': {
          '0%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '40%': { opacity: '1', transform: 'scale(1) rotate(15deg)' },
          '100%': { opacity: '0', transform: 'scale(0.5) rotate(30deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-4deg)' },
          '75%': { transform: 'rotate(4deg)' },
        },
      },
      animation: {
        'sparkle-pop': 'sparkle-pop 0.6s ease-out forwards',
        wiggle: 'wiggle 0.4s ease-in-out 1',
        'spin-slow': 'spin 24s linear infinite',
        'spin-slow-reverse': 'spin 30s linear infinite reverse',
      },
    },
  },
  plugins: [],
}
