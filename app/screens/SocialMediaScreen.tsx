import { TextStyle, ViewStyle } from "react-native"

import React, { FC } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screen, SwiperCard, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface SocialMediaScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<"SocialMedia">> {}

export const SocialMediaScreen: FC<SocialMediaScreenProps> = observer(function SocialMediaScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen
      style={$root}
      preset="fixed"
      safeAreaEdges={["top"]}
      contentContainerStyle={{ backgroundColor: "#365b2d", height: "100%" }}
    >
      <Text text="Redes Sociales" preset="heading" style={$title} />
      <Text text="Encuéntrame en las redes sociales" preset="subheading" style={$subTitle} />
      <Text
        text="¡Te invito a seguirme para obtener más información sobre el proyecto y el desarrollo sustentable!"
        preset="subheading"
        style={$subTitle}
      />
      <SwiperCard style={{ height: "60%", marginHorizontal: 20 }} />
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
  marginTop: 32,
}
const $subTitle: TextStyle = {
  marginHorizontal: 20,

  fontWeight: "bold",
  textAlign: "justify",
}
