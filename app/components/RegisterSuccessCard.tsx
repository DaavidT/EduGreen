import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { Button, Card } from "react-native-paper"

import * as React from "react"
import { useState } from "react"

import { Text } from "app/components/Text"
import { observer } from "mobx-react-lite"

export interface RegisterSuccessCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  setStatus: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Describe your component here
 */
export const RegisterSuccessCard = observer(function RegisterSuccessCard(
  props: RegisterSuccessCardProps,
) {
  const { setStatus } = props
  const handleRegisterAnother = () => {
    setStatus(false)
  }

  return (
    <View style={$successContainer}>
      <Card style={$card} elevation={4}>
        <Card.Cover source={require("../../assets/images/planeta_bonito.jpg")} />
        <Card.Content style={{ backgroundColor: "transparent", marginVertical: 20 }}>
          <Text text="Registro exitoso" style={$successText} />
          <Button mode="contained" onPress={handleRegisterAnother}>
            ¿Desea registrar otro contacto?
          </Button>
        </Card.Content>
      </Card>
    </View>
  )
})

const $successContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 100,
}

const $successText: TextStyle = {
  marginBottom: 20,
  fontSize: 18,
  fontWeight: "bold",
}
const $card: ViewStyle = {
  marginTop: 20,
  backgroundColor: "#74ad65",
}
