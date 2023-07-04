import { Linking, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import Swiper from "react-native-swiper"

import * as React from "react"

import { faGlobe, faLeaf, faSeedling } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Text } from "app/components/Text"
import { colors, typography } from "app/theme"
import { observer } from "mobx-react-lite"

export interface SwiperCardExternalMediaProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const SwiperCardExternalMedia = observer(function SwiperCardExternalMedia(
  props: SwiperCardExternalMediaProps,
) {
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
          <FontAwesomeIcon icon={faGlobe} size={50} color={colors.palette.greenlight} />
          <Text text="Naciones Unidas" style={$text} />
          <Text
            text="Las Naciones Unidas son una organización internacional fundada en 1945. Actualmente está integrada por 193 países miembros."
            style={$text}
          />
        </TouchableOpacity>
        <TouchableOpacity style={$cardContainer} onPress={() => openUrl("https://news.un.org/es/")}>
          <FontAwesomeIcon icon={faLeaf} size={50} color={colors.palette.greenlight} />
          <Text text="Extinction Rebellion" style={$text} />
          <Text
            text="Busca promover cambios políticos y sociales significativos para abordar la emergencia ambiental."
            style={$text}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={$cardContainer}
          onPress={() => openUrl("https://rebellion.global/")}
        >
          <FontAwesomeIcon icon={faSeedling} size={50} color={colors.palette.greenlight} />
          <Text text="Fridays for Future" style={$text} />
          <Text
            text="Consiste en huelgas estudiantiles y manifestaciones pacíficas los viernes para exigir acciones urgentes contra el cambio climático por parte de los gobiernos y las instituciones."
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
