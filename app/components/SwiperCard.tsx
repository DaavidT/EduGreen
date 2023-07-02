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
          <FontAwesomeIcon icon={faGithub} size={40} color={colors.palette.primary500} />
          <Text text="Github" style={$text} />
        </TouchableOpacity>
        <TouchableOpacity style={$cardContainer} onPress={() => openUrl("https://linkedin.com")}>
          <FontAwesomeIcon icon={faLinkedin} size={40} color={colors.palette.primary500} />
          <Text text="Linkedin" style={$text} />
        </TouchableOpacity>
        <TouchableOpacity
          style={$cardContainer}
          onPress={() => openUrl("https://www.instagram.com/daavid_tal/")}
        >
          <FontAwesomeIcon icon={faInstagram} size={40} color={colors.palette.primary500} />
          <Text text="Instagram" style={$text} />
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
  backgroundColor: "#1b1a32",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
