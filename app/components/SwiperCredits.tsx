import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import Swiper from "react-native-swiper"

import * as React from "react"

import { Text } from "app/components/Text"
import { observer } from "mobx-react-lite"

export interface SwiperCreditsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const SwiperCredits = observer(function SwiperCredits(props: SwiperCreditsProps) {
  const data = [
    {
      title: "Investigación",
      text: "Se define la estructura de la aplicación, se investigan las tecnologías a utilizar y se realiza un boceto siguiendo las indicaciones de la práctica.",
    },
    {
      title: "Diseño",
      text: "Se comienza a maquetar la aplicación, se escoge react native como framework a utilizar, Firebase como backend y se comienza a desarrollar la aplicación a partir de una plantilla.",
    },
    {
      title: "Desarrollo",
      text: "Se comienza a desarrollar la aplicación a partir de una plantilla, se definen los colores y se comienza a maquetar la aplicación, la funcionalidad de la aplicación se va agregando a medida que se avanza en el desarrollo junto con la integración del backend.",
    },
    {
      title: "Pruebas",
      text: "Se valida que los campos esten correctamente validados, se realizan pruebas de usabilidad, se valida la base de datos y se corrigen errores.",
    },
    {
      title: "Publicación",
      text: "Se exporta en formato APK, se realizan pruebas en este formato y si se desea se publica en la Play Store.",
    },
    {
      title: "Mantenimiento",
      text: "En esta etapa se corrigen errores, se optimiza el rendimiento y se agregan nuevas funcionalidades.",
    },
    {
      title: "Mejoras",
      text: "En esta etapa se agregan nuevas funcionalidades, se optimiza el rendimiento y se corrigen errores.",
    },
    {
      title: "Actualización",
      text: "En esta etapa se corregirán errores, se optimiza el rendimiento y se agregan nuevas funcionalidades.",
    },
    {
      title: "Créditos",
      text: "Esta aplicación fue desarrollada por David Fernando Talavera Torres, estudiante de Ingeniería en Sistemas Computacionales en la Universidad Tecnológica de México, el código fuente se encuentra en mi perfil de GitHub",
    },
  ]

  return (
    <Swiper
      dotStyle={$dotStyle}
      activeDotStyle={$activeDotStyle}
      autoplay
      horizontal={false}
      autoplayTimeout={10}
      loop
      showsHorizontalScrollIndicator
    >
      {data.map((item, index) => (
        <View key={index} style={$cardContainer}>
          <Text text={item.title} style={$subTitle} />
          <Text text={item.text} style={$subText} />
        </View>
      ))}
    </Swiper>
  )
})

const $dotStyle: ViewStyle = {
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: "#49521C",
  margin: 4,
}

const $activeDotStyle: ViewStyle = {
  width: 8,
  height: 16,
  borderRadius: 4,
  backgroundColor: "#333622",
  margin: 4,
}

const $subTitle: TextStyle = {
  marginHorizontal: 20,
  fontWeight: "bold",
  textAlign: "justify",
}

const $subText: TextStyle = {
  marginHorizontal: 20,
  marginTop: 10,
  textAlign: "justify",
}

const $cardContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#DFE3D8",
  marginHorizontal: 20,
  borderRadius: 10,
}
