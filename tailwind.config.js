/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    /**
     * Pages TailwindCSS Can Be Applied To
     *
     */
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /**
         * Google Fonts Configuration
         */
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        /**
         * Custom Color Schema Configuration
         */
        dwhite: "#FFFFFF",
        dlightwhite: "#D5D5D5",
        dgray: "#777777",
        dlightgray: "#99999",
        dblack: "#000000",
        dlightblack: "#333333",
        dred: "#E8472D",
        dlightred: "#C2345F",
        dgreen: "#0A7641",
        dlightgreen: "#009B4E",
        dfadegreen: "rgba(0, 155, 78, 0.2)",
        dpink: "#E33288",
        dblue: "#0083FF",
        dyellow: "#FDCD52",
      },
      maxWidth: {
        cutline: "1440px",
      },
      transitionProperty: {
        smooth: "all 0.35s ease-in-out cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [
    /**
     * TailwindCss Plugins Configuration
     */
    // tailwind forms plugin
    // require('@tailwindcss/forms'),
  ],
};
