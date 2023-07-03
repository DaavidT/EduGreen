import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Card, TextInput } from "react-native-paper"

import React, { FC, ReactNode, useState } from "react"

import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { BackgroundTopLayout, RegisterSuccessCard, Screen, Text, TextField } from "app/components"
import { RegisterUserForm } from "app/components/RegisterUserForm"
import { AppStackScreenProps } from "app/navigators"
import { api } from "app/services/api"
import { observer } from "mobx-react-lite"

interface RegisterUserScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<"RegisterUser">> {}

export const RegisterUserScreen: FC<RegisterUserScreenProps> = observer(
  function RegisterUserScreen() {
    const [isSuccess, setIsSuccess] = useState(false)

    const onSubmit = async (data) => {
      try {
        const { name, lastName, age, email, comments } = data
        const response = await api.writeUserData(name, lastName, age, email, comments)
        console.log(response)
        setIsSuccess(true)
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <Screen
        style={$root}
        preset="fixed"
        safeAreaEdges={["top"]}
        contentContainerStyle={{ backgroundColor: "#365b2d", height: "100%" }}
      >
        <Text
          text="Obtén mas información sobre el  desarrollo sustentable"
          preset="subheading"
          style={$title}
        />
        {!isSuccess ? (
          <View style={$cardContainer}>
            <RegisterUserForm onSubmit={(data) => onSubmit(data)} />
          </View>
        ) : (
          <>
            <View style={$successContainer}>
              <RegisterSuccessCard setStatus={setIsSuccess} />
            </View>
          </>
        )}
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
  marginTop: 32,
  marginBottom: 16,
  marginHorizontal: 20,
  fontSize: 24,
  fontWeight: "bold",
}

const $successContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}
