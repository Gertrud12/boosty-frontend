/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_yellow: "#F3B921E0",
        body_text: "#2B2D2C",
        dark_gray: "#374646",
        light_gray: "#F8F6F4",
        home_comp_btnbg: "#202D2D",
        faq_bg: "#F3F8F8",
      },
      fontFamily: {
        opensans: ["Open Sans", "serif"],
      },
    },
  },
  plugins: [],
};
