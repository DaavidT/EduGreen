import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Card, TextInput } from "react-native-paper"

import React, { FC, ReactNode } from "react"

import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screen, Text, TextField } from "app/components"
import { RegisterUserForm } from "app/components/RegisterUserForm"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"

interface RegisterUserScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<"RegisterUser">> {}

export const RegisterUserScreen: FC<RegisterUserScreenProps> = observer(
  function RegisterUserScreen() {
    return (
      <Screen style={$root} preset="scroll" safeAreaEdges={["top", "left"]}>
        <Text
          text="Obtén mas información sobre el desarrollo sustentable"
          preset="subheading"
          style={$title}
        />
        <View style={$cardContainer}>
          <RegisterUserForm />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $cardContainer: ViewStyle = {
  marginHorizontal: 20,
}

const $title: TextStyle = {
  marginBottom: 16,
  fontSize: 24,
  fontWeight: "bold",
}
