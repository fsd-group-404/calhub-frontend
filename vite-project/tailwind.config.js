/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFC107",

          secondary: "#0059A4",

          accent: "#FFE1B6",

          neutral: "#070707",

          "base-100": "#0E0E39",

          info: "#00c1ff",

          success: "#00d357",

          warning: "#e25f00",

          error: "#ff5376",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
