/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        google: ["google", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      spacing: {
        main: "100px",
      },
    },
  },
  plugins: [],
};
