/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/layout/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "bg-beige": "#E7D8C0",
        "card-bg-beige": "#FFF6E7",
        "dark-green": "#00362B",
        "text-green": "#001612",
        "button-brown": "#C05A21",
      },
      fontFamily: {
        
      }
    },
  },
  plugins: [],
};
