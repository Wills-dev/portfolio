/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fira: ["Fira Code", "monospace"],
      exo: ["Exo 2", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        "half-transparent": "rgba(0, 0, 0, 0.1)",
        "h-transparent": "rgba(0, 0, 0, 0.5)",
        "primary-color": "#050810",
      },
      colors: {
        "primary-color": "#9CA3AF",
        "sec-color": "#91B4EF",
        "tert-colr": "#CCCCCC",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
