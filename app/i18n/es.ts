const es = {
  common: {
    ok: "OK!",
    cancel: "Cancelar",
    back: "Atras",
  },
  welcomeScreen: {
    welcome: "EduGreen: Descubre la Sustentabilidad",
    welcomeMessage: "Explora, Aprende y Actúa para un Futuro Sostenible",
    exciting: "Una aplicación donde puedes aprender sobre el medio ambiente",
  },
  errorScreen: {
    title: "!Algún error ha ocurrido!",
    friendlySubtitle:
      "Esta es una pantalla de error amigable. Puedes mostrar esto a un usuario y pedirle que se comunique con el soporte técnico.",
    reset: "REINICIAR APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
}

export default es
export type Translations = typeof es
