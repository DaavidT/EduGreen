import { Linking, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import Swiper from "react-native-swiper"

import * as React from "react"

import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Text } from "app/components/Text"
import { colors, typography } from "app/theme"
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
      text: "En esta etapa se investiga sobre el tema a tratar, se analizan las necesidades del usuario y se definen los objetivos del proyecto.",
    },
    {
      title: "Diseño",
      text: "En esta etapa se definen los requerimientos del proyecto, se realiza un prototipo y se diseña la interfaz de usuario.",
    },
    {
      title: "Desarrollo",
      text: "En esta etapa se desarrolla el proyecto, se implementan las funcionalidades y se realizan pruebas de funcionamiento.",
    },
    {
      title: "Pruebas",
      text: "En esta etapa se realizan pruebas de funcionamiento, se corrigen errores y se optimiza el rendimiento.",
    },
    {
      title: "Publicación",
      text: "En esta etapa se publica el proyecto en la tienda de aplicaciones y se realiza una campaña de marketing.",
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
  ]

  return (
    <Swiper
      dotStyle={$dotStyle}
      activeDotStyle={$activeDotStyle}
      autoplay
      horizontal={false}
      autoplayTimeout={5}
      loop
      showsHorizontalScrollIndicator
      automaticallyAdjustContentInsets
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
  backgroundColor: "#fff",
  margin: 4,
}

const $activeDotStyle: ViewStyle = {
  width: 16,
  height: 8,
  borderRadius: 4,
  backgroundColor: "#fff",
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
  backgroundColor: "#427a36",
  height: "80%",
  marginHorizontal: 20,
}
