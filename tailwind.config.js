/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundSize: {
      110: "110rem",
      55: "55rem",
    },
    fontFamily: {
      crimsonText: ['"Crimson Text"', "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
