import { Animated, TextStyle, View, ViewStyle } from "react-native"

import React, { FC, useRef, useState } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RegisterSuccessCard, TitleLayout } from "app/components"
import { RegisterUserForm } from "app/components/RegisterUserForm"
import { AppStackScreenProps } from "app/navigators"
import { api } from "app/services/api"
import { observer } from "mobx-react-lite"

interface RegisterUserScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<"RegisterUser">> {}

export const RegisterUserScreen: FC<RegisterUserScreenProps> = observer(
  function RegisterUserScreen() {
    const [isSuccess, setIsSuccess] = useState(false)
    const scrollY = useRef(new Animated.Value(0)).current

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
      <TitleLayout title="Obtén mas información sobre el  desarrollo sustentable" scrollY={scrollY}>
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
      </TitleLayout>
    )
  },
)

const $cardContainer: ViewStyle = {
  flex: 1,
  marginHorizontal: 20,
  paddingTop: 150,
}

const $successContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 150,
  marginHorizontal: 20,
}
