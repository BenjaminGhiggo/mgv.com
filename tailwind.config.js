/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        magnavoz: {
          dark: '#1F3A64',    // Azul Oscuro (Logo)
          light: '#4A90E2',   // Azul Claro (Logo)
          gray: '#F4F5F7',    // Gris Claro (Fondo formulario)
          grayMid: '#B0B0B0', // Gris Medio
          green: '#00C48C',   // Verde Azulado
          greenLight: '#00E1B6', // Verde Claro
          background: '#FFFFFF' // Blanco (Fondo principal)
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};