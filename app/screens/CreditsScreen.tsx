import { TextStyle, ViewStyle } from "react-native"

import React, { FC } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screen, SwiperCard, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"

interface CreditsScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Credits">> {}

export const CreditsScreen: FC<CreditsScreenProps> = observer(function CreditsScreen() {
  return (
    <Screen
      style={$root}
      preset="fixed"
      safeAreaEdges={["top"]}
      contentContainerStyle={{ backgroundColor: "#365b2d" }}
    >
      <Text text="Créditos" preset="heading" style={$title} />
      <Text text="Encuéntrame en las redes sociales" preset="subheading" style={$title} />
      <Text
        text="¡Te invito a seguirme para obtener más información sobre el proyecto y el desarrollo sustentable!"
        preset="subheading"
        style={$title}
      />
      <SwiperCard style={{ height: "65%", marginHorizontal: 20 }} />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  height: "50%",
}

const $title: TextStyle = {
  textAlign: "center",
  marginBottom: 16,
  fontWeight: "bold",
}
