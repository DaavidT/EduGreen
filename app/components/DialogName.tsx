import { Modal, StyleSheet, TouchableOpacity, View } from "react-native"
import { Button } from "react-native-paper"

import * as React from "react"

import { useStores } from "app/models"
import { colors, typography } from "app/theme"
import { observer } from "mobx-react-lite"

import { Text, TextField } from "../components"

export interface DialogNameProps {
  /**
   * An optional style override useful for padding & margin.
   */
  visible: boolean
  setVisible: (visible: boolean) => void
  navigation: any
}

/**
 * Describe your component here
 */
export const DialogName = observer(function DialogName(props: DialogNameProps) {
  const { visible, setVisible, navigation } = props
  const [text, setText] = React.useState("")

  const {
    authenticationLogin: { setAuthStatusTrue, setAuthUser },
  } = useStores()

  const goNext = () => {
    if (text === "" || text.length < 3) return
    setVisible(false)
    setAuthStatusTrue()
    setAuthUser(text)
  }

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Text text="Cerrar" preset="subheading" />
        </TouchableOpacity>
        <View style={{ height: 200 }} />
        <View style={{ height: 100, justifyContent: "space-between" }}>
          <Text text="Para continuar: " preset="heading" style={{ textAlign: "center" }} />
          <Text
            text="Por favor escribe tu nombre"
            preset="subheading"
            style={{ textAlign: "center", marginBottom: 20 }}
          />

          <TextField
            placeholder="Nombre"
            value={text}
            onChangeText={(text) => setText(text)}
            style={styles.input}
            containerStyle={{ marginBottom: 20 }}
          />
          <Button mode="contained" textColor={"#ffff"} buttonColor="#041d1a" onPress={goNext}>
            Continuar
          </Button>
        </View>
      </View>
    </Modal>
  )
})

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  input: {},
})
