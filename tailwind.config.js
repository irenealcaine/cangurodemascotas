/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '12.5': '12.5rem',

    },
    extend: {
      backgroundImage: {
        'body-pattern': "url('/src/img/fondo.avif')",
        'banner-w-to-p': "url('/src/img/banner.png')",
        'banner-p-to-w': "url('/src/img/invertido.png')"
      },
      boxShadow: {
        '3xl': '0 0 10px #000',
      }
    },
  },
  plugins: [],
}
