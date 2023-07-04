import { Animated, ScrollView, TextStyle, ViewStyle } from "react-native"

import React, { FC, useRef } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { SwiperCard, Text, TitleLayout } from "app/components"
import { SwiperCardExternalMedia } from "app/components/SwiperCardExternalMedia"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"

interface SocialMediaScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<"SocialMedia">> {}

export const SocialMediaScreen: FC<SocialMediaScreenProps> = observer(function SocialMediaScreen() {
  const scrollY = useRef(new Animated.Value(0)).current
  return (
    <TitleLayout title="Redes Sociales" scrollY={scrollY}>
      <Text
        text="Síguenos redes sociales"
        preset="subheading"
        style={{ ...$subTitle, paddingTop: 120, paddingBottom: 20 }}
      />
      <ScrollView>
        <Text text="Redes sociales del desarrollador" style={{ ...$cardTitle, color: "#F3F2EE" }} />
        <SwiperCard style={$swiperCardStyle} />

        <Text
          text="Redes sociales de los movimientos más importantes del desarrollo sustentable"
          style={$cardTitle}
        />
        <SwiperCardExternalMedia style={$swiperCardStyle} />
      </ScrollView>
    </TitleLayout>
  )
})

const $subTitle: TextStyle = {
  marginHorizontal: 25,
  fontWeight: "bold",
  textAlign: "justify",
}

const $swiperCardStyle: ViewStyle = {
  height: 200,
  marginHorizontal: 20,
  marginBottom: 25,
}

const $cardTitle: TextStyle = {
  fontWeight: "bold",
  fontSize: 18,
  marginBottom: 10,
  textAlign: "center",
}
