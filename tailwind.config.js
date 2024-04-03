/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        neutral: "#1E1E1E",
        secondary: "#4D4D4E",
        blueBg: "#F9FCFF",
        blue1: "#F9FAFF",
        pink: "#FFF3F3",
      },

      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        itim: ["Itim", "cursive"],
      },
      screens: {
        xs: "480px",
        mds: "600px",
        md: "800px",
        lgss: "976px",
        lg: "1200px",
        xxl: "1300px",
      },
    },
  },
  variants: {},
  plugins: [],
};
