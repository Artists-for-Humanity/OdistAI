/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F0C422",
        gray: "#858585",
        purple: "#893FE8",
        "matte-black": {
          light: "#252525",
          DEFAULT: "#1B1B1B",
          dark: "#141414",
        },
      },
    },
  },
  plugins: [],
};
