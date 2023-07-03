import { TextStyle, View, ViewStyle } from "react-native"
import Swiper from "react-native-swiper"

import React, { FC } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screen, Text } from "app/components"
import { SwiperCredits } from "app/components/SwiperCredits"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"

interface CreditsScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Credits">> {}

export const CreditsScreen: FC<CreditsScreenProps> = observer(function CreditsScreen() {
  return (
    <Screen
      style={$root}
      preset="fixed"
      safeAreaEdges={["top"]}
      contentContainerStyle={{ backgroundColor: "#365b2d", height: "100%" }}
    >
      <Text text="Créditos" preset="heading" style={$title} />
      <SwiperCredits></SwiperCredits>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $title: TextStyle = {
  textAlign: "center",
  marginBottom: 16,
  fontWeight: "bold",
  marginTop: 32,
  height: "10%",
}
