/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff', // آبی
        secondary: '#2c253d', // خاکستری تیره :)
        accent: '#ffc107', // زرد
        error: '#dc3545', // قرمز
        warning: '#ffc107', // زرد
        success: '#28a745', // سبز
        info: '#17a2b8', // آبی روشن
      },
    },
  },
  
  plugins: [],
}