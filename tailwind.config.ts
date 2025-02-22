import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // Add the paths to all of your template files
  darkMode: 'class', // Usa 'class' para activar modo oscuro manualmente
  theme: {
    extend: {
      colors: {
        background: '#000000', // Color de fondo global
      },
    },
  },
  plugins: [],
};

export default config;
