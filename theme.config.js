const { ThemeBuilder, Theme } = require("tailwindcss-theming");

const lightTheme = new Theme()
  .name("light")
  .default()
  .assignable()
  .colors({
    /**
     * Constants to be enherited
     */
    white: "ffffff",
    black: "000000",

    // A transparent color, which alpha value will be detected.
    transparent: "transparent",

    /**
     * Navigation (bottom, top)
     */
    "navigation-primary": "#3c4253",
    "navigation-secondary": "#303030",
    "on-navigation": "#9aa2b6",

    "bottom-nav": "#f7fafc",
    "on-bottom-nav": "#a0aec0",

    /**
     * Brand colors
     */
    brand: "#2196f3",
    "brand-variant": "#1565c0",
    "on-brand": "#ffffff",
    "on-brand-variant": "#ffffff",

    /**
     * Backgrounds
     */
    "bg-primary": "#edf2f7",
    "on-bg-primary": "#718096",

    "bg-secondary": "#e2e8f0",
    "on-bg-secondary": "",

    "bg-ternary": "#718096",

    /**
     * Surfaces
     */
    "surface-primary": "#f7fafc", // gray-200
    "on-surface-primary": "#718096", // gray-600

    "surface-secondary": "#ffffff",
    "on-surface-secondary": "#a0aec0",

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
  .opacityVariant("100", 0.1)
  .opacityVariant("500", 0.5)
  .opacityVariant("800", 0.8);

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
