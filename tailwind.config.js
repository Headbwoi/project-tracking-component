module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    colors: {
      Red: "hsl(0, 100%, 68%)",
      veryDarkBlue: "hsl(230, 29%, 20%)",
      darkGrayishBlue: "hsl(230, 11%, 40%)",
      grayishBlue: "hsl(231, 7%, 65%)",
      lightGrayishBlue: "hsl(207, 33%, 95%)",
    },
    fontFamily: {
      'barlow': ['"Barlow"', 'sans-serif'],
      'barlowCondensed': [`"Barlow Condensed"`, 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
