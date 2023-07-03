import {
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"

import * as React from "react"

import { Text } from "app/components/Text"
import { colors, typography } from "app/theme"
import { observer } from "mobx-react-lite"

export interface BackgroundTopLayoutProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * The text to be displayed on top of the image.
   */
  text?: string
  /**
   * The image source.
   */
  imageSource?: ImageSourcePropType
}

/**
 * Describe your component here
 */
export const BackgroundTopLayout = observer(function BackgroundTopLayout(
  props: BackgroundTopLayoutProps,
) {
  const { style, text, imageSource } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <ImageBackground source={imageSource} style={$imageBackground}>
        <Text style={$text}>{text}</Text>
      </ImageBackground>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $imageBackground: ImageStyle = {
  flex: 1,
  resizeMode: "cover",
  opacity: 0.8,
  justifyContent: "center",
  alignItems: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
