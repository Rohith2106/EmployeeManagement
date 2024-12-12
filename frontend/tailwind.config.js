/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: {
            light: '#BFDBFE', // Light Blue
            DEFAULT: '#3B82F6', // Blue
            dark: '#1E40AF', // Dark Blue
            primary: '#3B82F6',
        },
    },

    },
  },
  plugins: [],
}

