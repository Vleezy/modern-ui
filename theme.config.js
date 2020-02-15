const { ThemeBuilder, Theme } = require("tailwindcss-theming");

const lightTheme = new Theme()
  .name("light")
  .default()
  .assignable()
  .colors({
    // A transparent color, which alpha value will be detected.
    transparent: "transparent",

    // Brand colors
    brand: "#2196f3",
    "on-brand": "#ffffff",

    // Background colors, but not limited to `bg` utilities.
    background: "#edf2f7",
    "on-background": "#585851",

    "surface-primary": "#ffffff",
    "on-surface-primary": "#3c3c3c",

    // Borders
    "border-primary": "#cbd5e0",

    // Event colors.
    error: "#b00020",
    "on-error": "#ffffff",
    success: "#3ab577",
    "on-success": "#ffffff",
    warning: "#e65100",
    "on-warning": "#ffffff",
    info: "#2481ea",
    "on-info": "#ffffff"
  })

  // Material variants
  .opacityVariant("high-emphasis", 0.87)
  .opacityVariant("medium-emphasis", 0.6)
  .opacityVariant("muted", 0.38)

  // Arbitrary variants
  .opacityVariant("slightly-visible", 0.075)

  // Custom variable
  .variable("decoration", "underline")

  // Tailwind extension
  .variable("dynamic", "not-allowed", "cursor");
const darkTheme = new Theme()
  .name("dark")
  .colors({
    // Brand colors
    brand: "#ed64a6",
    "on-brand": "#ffffff",

    // Background colors, but not limited to `bg` utilities.
    background: "#1f1f1f",
    "on-background": "#ffffff",

    "surface-primary": "#282828",
    "on-surface-primary": "#ffffff",

    navigation: "#2d3748",
    "on-navigation": "#a0aec0",

    // Event colors.
    error: "#e67388",
    "on-error": "#ffffff",
    success: "#3ab577",
    "on-success": "#ffffff",
    warning: "#ffa777",
    "on-warning": "#ffffff",
    info: "#83bdff",
    "on-info": "#ffffff"
  })

  // Material variants
  .opacityVariant("slightly-visible", 0.04)

  // Custom variable
  .variable("decoration", "none")

  // Tailwind extension
  .variable("dynamic", "pointer", "cursor");
module.exports = new ThemeBuilder()
  .default(lightTheme)
  .dark(darkTheme)
  .asAttribute();
