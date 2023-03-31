/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Vazir: ["Vazir", "VazirCode", "VazirCodeHack"],
        VazirCode: ["VazirCode", "Vazir", "VazirCodeHack"],
        VazirCodeHack: ["VazirCodeHack", "Vazir", "VazirCodeHack"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
