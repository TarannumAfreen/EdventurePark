/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        custom: "-24rem", // Custom negative margin
      },
    },
  },
  plugins: [],
};
