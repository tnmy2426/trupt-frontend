/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./public/**/*.html", "./public/**/*.js"],
   theme: {
      fontFamily: {
         noto: ["Noto Sans", "system-ui", "sans-serif"],
         ubuntu: ["Ubuntu", "system-ui", "sans-serif"],
      },
      extend: {
         colors: {
            clr_primary: "#212806",
            clr_secondary: "#f5eee6",
            purple_bg: "#EECFFE",
            clr_black: "#1E1E1E",
            clr_white: "#FCF8F3",
            clr_gray: "#F5F5F5",
         },
      },
      container: {
         center: true,
         padding: {
            DEFAULT: "1rem",
            sm: "1rem",
            md: "1rem",
            lg: "1.5rem",
            xl: "2rem",
            "2xl": "2rem",
         },
      },
   },
   plugins: [],
};
