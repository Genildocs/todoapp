/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        bright_blue: ' hsl(220, 98%, 61%)',
      },

      gridTemplateColumns: {
        md: 'minmax(5rem, 32rem)',
      },
    },
  },
  plugins: [],
};
