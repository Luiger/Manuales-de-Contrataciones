// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Asegúrate de que las rutas en 'content' sean correctas para tu proyecto
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  
  // ---> AÑADE ESTA LÍNEA <---
  presets: [require("nativewind/preset")],
  
  theme: {
    extend: {},
  },
  plugins: [],
};