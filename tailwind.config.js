/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    darkMode: false,
    container: {
      center: true,
      padding: "2rem",
      justifyContent: {
        center: "center",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: "cupcake",
  },
};
