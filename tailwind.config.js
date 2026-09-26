/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
      },
      colors: {
        ink: "#070708",
        paper: "#f4f0e6",
        mute: "#a39e94",
        limeglow: "#d6ff4a",
      },
    },
  },
  plugins: [],
};
