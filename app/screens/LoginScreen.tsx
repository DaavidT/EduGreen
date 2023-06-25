import { View, ViewStyle } from "react-native"
import { HelperText, TextInput } from "react-native-paper"

import React, { FC, useState } from "react"

import { useTheme } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screen, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface LoginScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Login">> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen() {
  const [text, setText] = useState("")
  const [password, setPassword] = useState("")
  const themeColor = useTheme()

  const onChangeText = (text) => setText(text)
  const hasErrors = () => {
    return !text.includes("@")
  }

  return (
    <Screen preset="auto" safeAreaEdges={["top"]}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", height: "70%" }}>
        <Text preset="heading" text="Login" />
      </View>
      <View>
        <TextInput
          label="Correo electronico"
          value={text}
          onChangeText={onChangeText}
          contentStyle={$root}
        />
        <TextInput label="Contraseña" value={password} onChangeText={onChangeText} />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: "transparent",
}
