/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1550px" },
      xl: { max: "1380px" },
      lg: { max: "980px" },
      md: { max: "768px" },
      sm: { max: "580px" },
    },
  },
  plugins: [],
};
