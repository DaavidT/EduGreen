import { View, ViewStyle } from "react-native"
import { TextInput } from "react-native-paper"

import React, { FC, ReactNode } from "react"

import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screen, Text, TextField } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface RegisterUserScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<"RegisterUser">> {}

export const RegisterUserScreen: FC<RegisterUserScreenProps> = observer(
  function RegisterUserScreen() {
    const renderPasswordAccessory: any = () => {
      return <FontAwesomeIcon icon={faEye} size={20} />
    }

    return (
      <Screen style={$root} preset="scroll">
        <View style={{ height: 100 }} />
        <TextInput label="Nombre" mode="flat" />
        <TextInput label="Apellido" mode="flat" />
        <TextInput label="Edad" mode="flat" />
        <TextInput label="Correo" mode="flat" />
        <TextInput label="Contraseña" mode="flat" />
        <TextInput
          label="Confirmar contraseña"
          mode="flat"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />

        <View style={{ height: 100 }} />
      </Screen>
    )
  },
)a

const $root: ViewStyle = {
  flex: 1,
}
