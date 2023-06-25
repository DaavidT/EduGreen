import { DefaultTheme, NavigationContainer } from "@react-navigation/native"

declare module "@react-navigation/native" {
  export interface Theme extends DefaultTheme {
    // Aquí puedes añadir las propiedades personalizadas para tu tema
    dark: boolean
    colors: {
      primary: string
      background: string
      card: string
      text: string
      border: string
      notification: string
      transparent05: string
      transparentInverse: string
      transparent05: string
    }
  }
}
