const { ThemeBuilder, Theme } = require("tailwindcss-theming");

const lightTheme = new Theme()
  .name("light")
  .default()
  .assignable()
  .colors({
    // Constants to be enherited.
    white: "ffffff",
    black: "000000",

    // A transparent color, which alpha value will be detected.
    transparent: "transparent",

    // Navigation
    "navigation-primary": "#3c4253",
    "navigation-secondary": "#303030",
    "on-navigation": "#9aa2b6",

    // Brand colors
    brand: "#2196f3",
    "brand-variant": "#1565c0",
    "on-brand": "#ffffff",
    "on-brand-variant": "#ffffff",

    // Background colors, but not limited to `bg` utilities.
    "bg-primary": "#edf2f7",
    "on-bg-primary": "#585851",

    "bg-secondary": "#cbd5e0",
    "on-bg-secondary": "",

    "bg-ternary": "#718096",

    "surface-primary": "#f7fafc",
    "on-surface-primary": "#a0aec0",

    // Borders
    "bd-primary": "#cbd5e0",

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

  // Color variants
  .colorVariant("hover", "white", ["on-navigation"])

  // Material variants
  .opacityVariant("high-emphasis", 0.87)
  .opacityVariant("medium-emphasis", 0.6)
  .opacityVariant("disabled", 0.38)
  .opacityVariant("helper-emphasized", 0.87)
  .opacityVariant("helper", 0.6)
  .opacityVariant("inactive", 0.6)

  // Arbitrary variants
  .opacityVariant("quote-border", 0.5)
  .opacityVariant("muted", 0.38)
  .opacityVariant("kinda-visible", 0.1)
  .opacityVariant("slightly-visible", 0.075);
const darkTheme = new Theme()
  .name("dark")
  .colors({
    // Navigation
    "navigation-primary": "#282828",
    "navigation-secondary": "#303030",
    "on-navigation": "#9aa2b6",

    // Brand colors
    brand: "#2196f3",
    "brand-variant": "#1565c0",
    "on-brand": "#ffffff",
    "on-brand-variant": "#ffffff",

    // Background colors, but not limited to `bg` utilities.
    background: "#1f1f1f",
    surface: "#282828",
    "on-background": "#ffffff",
    "on-surface": "#ffffff",

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

  // Arbitrary variants
  .opacityVariant("quote-border", 0.15)
  .opacityVariant("kinda-visible", 0.038)
  .opacityVariant("slightly-visible", 0.02);
module.exports = new ThemeBuilder()
  .asAttribute()
  .default(lightTheme)
  .dark(darkTheme);
