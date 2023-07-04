import { Animated, View } from "react-native"

import React, { FC, useRef } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { TitleLayout } from "app/components"
import { SwiperCredits } from "app/components/SwiperCredits"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"

interface CreditsScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Credits">> {}

export const CreditsScreen: FC<CreditsScreenProps> = observer(function CreditsScreen() {
  const scrollY = useRef(new Animated.Value(0)).current
  return (
    <TitleLayout title="Etapas del desarrollo y créditos" scrollY={scrollY}>
      <View style={{ height: 50 }}></View>
      <View style={{ flex: 1, paddingTop: 120, marginBottom: 20 }}>
        <SwiperCredits />
      </View>
      <View style={{ height: 100 }}></View>
    </TitleLayout>
  )
})
