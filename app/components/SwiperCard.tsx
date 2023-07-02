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
      <Swiper autoplay autoplayTimeout={5} loop showsButtons>
        <TouchableOpacity
          style={$cardContainer}
          onPress={() => openUrl("https://github.com/DaavidT")}
        >
          <FontAwesomeIcon icon={faGithub} size={50} color={colors.palette.greenlight} />
          <Text text="Github" style={$text} />
          <Text
            text="Apasionado por el desarrollo sustentable y comprometido con hacer del mundo un lugar mejor. Comparto conocimientos y experiencias sobre proyectos escolares relacionados con la sustentabilidad. Únete a mi red para formar parte de una comunidad comprometida con el cambio positivo."
            style={$text}
          />
        </TouchableOpacity>
        <TouchableOpacity style={$cardContainer} onPress={() => openUrl("https://linkedin.com")}>
          <FontAwesomeIcon icon={faLinkedin} size={50} color={colors.palette.greenlight} />
          <Text text="Linkedin" style={$text} />
          <Text
            text="¡Bienvenido(a) a mi perfil de GitHub! Aquí encontrarás proyectos escolares y personales relacionados con el desarrollo sustentable. Explora mi repositorio y colabora en la construcción de soluciones sostenibles. ¡Juntos podemos marcar la diferencia!"
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
            text="¡Hola! Soy David Talavera y en mi cuenta de Instagram comparto mi pasión por el desarrollo sustentable. A través de imágenes y contenido inspirador, te invito a unirte a esta comunidad comprometida con la protección del medio ambiente. Sígueme para descubrir ideas, consejos y proyectos relacionados con la sustentabilidad."
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
  backgroundColor: "#427a36",
}

const $text: TextStyle = {
  textAlign: "justify",
  paddingHorizontal: 20,
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
