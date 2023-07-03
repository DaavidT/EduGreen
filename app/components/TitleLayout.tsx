import { Animated, TouchableOpacityProps, View } from "react-native"

import React, { memo } from "react"

import { useTheme } from "@react-navigation/native"
import { Text } from "app/components"

import { typography } from "../theme"

export interface TitleLayoutProps {
  title: string
  children?: React.ReactNode
  scrollY: Animated.Value
}

/**
 * Describe your component here
 */
export const TitleLayout = memo(function TitleLayout(props: TitleLayoutProps) {
  const { title, children, scrollY } = props
  const theme = useTheme()
  const { colors } = theme

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: colors.background,
          width: "100%",
          height: 220,
          position: "absolute",
          top: 0,
          left: 0,
          opacity: scrollY.interpolate({
            inputRange: [0, 100], // Rango en el que se desvanece el header
            outputRange: [1, 0], // Rango de opacidad del header
            extrapolate: "clamp", // Evita que la opacidad se salga de los límites
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 200], // Rango en el que se desplaza el header
                outputRange: [0, -100], // Cantidad de desplazamiento del header
                extrapolate: "clamp", // Evita que el header se desplace fuera de los límites
              }),
            },
          ],
        }}
      >
        <Text
          style={{
            marginTop: 57,
            paddingTop: 16,
            marginBottom: 23,
            paddingHorizontal: 32,
            color: "#F9FAFB",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </Animated.View>
      {children}
    </View>
  )
})

const styles = {
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  container: {
    flex: 1,
    backgroundColor: "#365b2d",
  },

  contentContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
}
