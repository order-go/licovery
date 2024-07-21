/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fourth: {
          DEFAULT: "#181818",
        },
        tertiary: {
          DEFAULT: "#000000",
        },
        secundary: {
          DEFAULT: "#7FFF00",
        },
        primary: {
          DEFAULT: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
