/** @type {import('tailwindcss').Config} */
module.exports = {
  // only text colors respond to the user's system preference;
  // backgrounds remain light regardless of dark mode
  darkMode: "media",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
