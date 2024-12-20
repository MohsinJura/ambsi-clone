/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Bwhite: '#ffffff', 
        darkred: '#b42a2a',
        darkblue: '#1d3667',
        back: '#f0f2f7',
      },
      fontFamily: {
        sans: ['"Roboto"', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif'], // Primary Serif
        mono: ['Fira Code', 'ui-monospace'], // Monospace
        poppins: ['Poppins', 'sans-serif'], // Additional Font
        roboto: ['Roboto', 'sans-serif'], // Additional Font
        lora: ['Lora', 'serif'],
        sog: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      fontSize: {
        small: ['13px', 'sog']
      },


    },
  },
  plugins: [],
}