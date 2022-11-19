/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-background": "#262b2f",
        "primary-background-alt": "#1e2226",
        "secondary-background": "#2b3035",
        "white-100": "#d0ced2",
        "white-200": "#b0abb5",
        "green-100": "#43c38c",
        "red-gradient-1": "#f34459",
        "red-gradient-2": "#e60e39",
        "yellow-100": "#e6ba6a",
        "red-100": "#f34459",
        "red-200": "#fc6464",
      },
      fontFamily: {
        minecraft: ["Minecraft Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
