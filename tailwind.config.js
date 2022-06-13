module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        logocolor: "#333333",
        lightGray: "#485b60",
        linkCOlor: "#1c3f3a",
        midGray: "#ece8d9",
        h1Color: "#102226",
        darkGreen: "#26534c",
        btnHover: "#1b3b37",
        btnHover2: "#e0eae8",
        greatColor: "#cbc7b5",
        footerBg: "#f1f3f3"

      },
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
}
