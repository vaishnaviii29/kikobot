/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        ledger: ['Ledger', 'serif'],
        goudy: ['"Goudy Bookletter 1911"'],
        lexend: ['"Lexend"', 'sans-serif'],
        spartan: ['"League Spartan"', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        slideIn: 'slideInRight 1s ease-out',
        'fade-in-out': 'fadeInOut 3s ease-in-out infinite',
      },
    
    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),('flowbite/plugin')],
  
};
