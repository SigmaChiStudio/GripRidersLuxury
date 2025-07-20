module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Rojo
        secondary: '#000000', // Negro
        accent: '#FFFFFF', // Blanco
      },
      backgroundImage: {
        'carbon-fiber': "url('/src/assets/images/carbon-fiber-texture.png')", // Textura de fibra de carbono
      },
      fontFamily: {
        japanese: ['"Noto Sans JP"', 'sans-serif'], // Tipografía estilo japonés moderno
      },
    },
  },
  plugins: [],
}