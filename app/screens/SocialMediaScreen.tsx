import { ViewStyle } from "react-native"

import React, { FC } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screen, Text } from "app/components"
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
    <Screen style={$root} preset="scroll">
      <Text text="socialMedia" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
