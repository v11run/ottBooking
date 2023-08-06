/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        global: '#f0f0f0', // Replace with your desired background color
      },
    },
  },
  plugins: [],
}