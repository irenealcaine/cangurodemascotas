/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      12.5: "12.5rem",
      30: "30rem",
    },
    extend: {
      backgroundImage: {
        "body-pattern": "url('/src/img/patron.svg')",
        "banner-w-to-p": "url('/src/img/banner1.svg')",
        "banner-p-to-w": "url('/src/img/banner2.svg')",
      },
      boxShadow: {
        "3xl": "0 0 10px #000",
      },
    },
  },
  plugins: [],
};
