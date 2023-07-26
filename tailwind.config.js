/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      height: {
        "screen/90": "90vh",
      },
      width: {
        "screen/90": "90vw",
      },
    },
  },
};
