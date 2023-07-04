import { Linking, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import Swiper from "react-native-swiper"

import * as React from "react"

import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Text } from "app/components/Text"
import { colors, typography } from "app/theme"
import { observer } from "mobx-react-lite"

export interface SwiperCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const SwiperCard = observer(function SwiperCard(props: SwiperCardProps) {
  const { style } = props
  const $styles = [$container, style]

  const openUrl = (url: string) => {
    Linking.openURL(url)
  }

  return (
    <View style={$styles}>
      <Swiper autoplay autoplayTimeout={5} loop>
        <TouchableOpacity
          style={$cardContainer}
          onPress={() => openUrl("https://github.com/DaavidT")}
        >
          <FontAwesomeIcon icon={faGithub} size={50} color={colors.palette.greenlight} />
          <Text text="Github" style={$text} />
          <Text
            text="¡Bienvenido(a) a mi perfil de GitHub! Aquí encontrarás proyectos escolares y personales relacionados con el desarrollo sustentable. Explora mi repositorio y colabora en la construcción de soluciones sostenibles."
            style={$text}
          />
        </TouchableOpacity>
        <TouchableOpacity style={$cardContainer} onPress={() => openUrl("https://linkedin.com")}>
          <FontAwesomeIcon icon={faLinkedin} size={50} color={colors.palette.greenlight} />
          <Text text="Linkedin" style={$text} />
          <Text
            text="Soy un desarrollador de software con experiencia en el desarrollo de aplicaciones móviles y web. Me considero una persona responsable, creativa y comprometida con el trabajo en equipo."
            style={$text}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={$cardContainer}
          onPress={() => openUrl("https://www.instagram.com/daavid_tal/")}
        >
          <FontAwesomeIcon icon={faInstagram} size={50} color={colors.palette.greenlight} />
          <Text text="Instagram" style={$text} />
          <Text
            text="¡Bienvenido(a) a mi perfil de Instagram! Explora mi repositorio y colabora en la construcción de soluciones sostenibles."
            style={$text}
          />
        </TouchableOpacity>
      </Swiper>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $cardContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#DFE3D8",
  borderRadius: 20,
}

const $text: TextStyle = {
  textAlign: "justify",
  paddingHorizontal: 20,
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: "#333622",
}
