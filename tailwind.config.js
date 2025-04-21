/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-move": "gradient-move 10s linear infinite",
      },
      keyframes: {
        "gradient-move": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      animationDelay: {
        2000: "2s",
        4000: "4s",
        6000: "6s",
        8000: "8s",
      },
    },
  },
  plugins: [],
};
