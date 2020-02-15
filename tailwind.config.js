module.exports = {
  theme: {
    linearGradientColors: theme => theme("colors"),
    radialGradientColors: theme => theme("colors"),
    conicGradientColors: theme => theme("colors"),
    extend: {}
  },
  variants: {},
  plugins: [require("./theme.config"), require("tailwindcss-gradients")]
};
