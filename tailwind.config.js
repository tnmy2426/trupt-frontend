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
            primary_clr: "#F7D031",
            secondary_clr: "#43B85C",
            purple_bg: "#EECFFE",
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
