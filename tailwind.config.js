/** @type {import('tailwindcss').Config} */
module.exports = {
  // only text colors respond to the user's system preference;
  // backgrounds remain light regardless of dark mode
  darkMode: "media",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // map the google-font variables to the recognizable tailwind names
        sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};
