// TODO: write documentation for colors and palette in own markdown file and add links from here
import { Theme } from "@react-navigation/native"

const palette = {
  neutral100: "#FFFFFF",
  //Background Light
  neutral200: "#639e64",
  // Text Dark
  neutral300: "#F5F5F5",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  //Background Dark && Text Light
  neutral800: "#333622",
  neutral900: "#000000",

  primary100: "#8DD4DF",
  //Background TextInput Dark
  primary200: "#262626",
  //Background TextInput Light
  primary300: "#F3F4F6",
  primary400: "#62949C",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  greenlight: "#a6e094",

  green100: "#48793c",
  green200: "#365b2d",
  green300: "#243d1e",
  green400: "#121e0f",
  green500: "#000000",

  link100: "#71717A",
  link200: "#8DD4DF",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  darkInputText: "#525252",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}

export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: palette.primary100,
    background: palette.neutral200,
    card: palette.neutral200,
    text: palette.neutral800,
    border: palette.neutral200,
    notification: palette.primary100,
    transparent05: "rgba(255, 255, 255, 0.5)",
    transparentInverse: "rgba(0, 0, 0, 0.5)",
  },
}

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "#333622",
    background: "#F3F2EF",
    card: "#49521C",
    text: palette.neutral300,
    border: "#4A511E",
    notification: palette.primary100,
    transparent05: "rgba(0, 0, 0, 0.5)",
    transparentInverse: "rgba(255, 255, 255, 0.5)",
  },
}
