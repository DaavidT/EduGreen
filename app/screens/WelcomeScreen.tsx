import { Image, ImageBackground, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button } from "react-native-paper"

import React, { FC } from "react"

import { useTheme } from "@react-navigation/native"
import { observer } from "mobx-react-lite"

import { Text } from "../components"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(props) {
  const theme = useTheme()
  const backgroundImageLight = require("../../assets/images/welcomeBackground.png")
  const backgroundImageDark = require("../../assets/images/welcomeBackgroundDark.png")
  const backgroundImage = theme.dark ? backgroundImageDark : backgroundImageLight
  const themeColor = theme.colors

  const { navigation } = props

  const goNext = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={backgroundImage} style={$container}>
        <View style={$topContainer}>
          <Text preset="heading" style={{ ...$welcomeHeading }} tx="welcomeScreen.welcome" />
          <Text preset="subheading" tx="welcomeScreen.welcomeMessage" />
        </View>
        <View style={$bottomContainer}>
          <Button
            mode="contained"
            textColor={themeColor.text}
            buttonColor="#041d1a"
            onPress={goNext}
          >
            Continuar
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
})

const $container: ImageStyle = {
  flex: 1,
  resizeMode: "contain",
}

const $topContainer: ViewStyle = {
  height: "75%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $bottomContainer: ViewStyle = {
  height: "25%",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
}

const $welcomeHeading: TextStyle = {
  fontSize: 40,
  marginVertical: spacing.lg,
}
