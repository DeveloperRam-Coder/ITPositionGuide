/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust the path to include src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto',], // Replace 'Roboto' with your chosen font
        // sans: ['Inter', 'sans-serif'],
        // sans: ['Open Sans', 'sans-serif'],
        // sans: ['Lato', 'sans-serif'],
        // sans: ['Source Sans Pro', 'sans-serif'],
        // sans: ['Montserrat', 'sans-serif'],

      },
    },
  },
  plugins: [],
};
