import { StyleSheet, View, ViewStyle } from "react-native"
import { Button, HelperText, TextInput } from "react-native-paper"

import React, { FC, useState } from "react"

import { useTheme } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screen, Text } from "app/components"
import { useAuth } from "app/components/hooks/auth"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface LoginScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Login">> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isButtonLoading, setIsButtonLoading] = useState(false)
  const themeColor = useTheme()

  const handleLogin = () => {
    setIsButtonLoading(true)
    const { login } = useAuth()
    login(email, password)
  }

  const hasErrors = () => {
    return !email.includes("@")
  }

  return (
    <Screen preset="auto" safeAreaEdges={["top"]} contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text preset="heading" text="Login" style={styles.title} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          contentStyle={styles.textInputContent}
        />
        <TextInput
          mode="outlined"
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          contentStyle={styles.textInputContent}
        />
        <HelperText type="error" visible={hasErrors()}>
          Email o contraseña incorrectos
        </HelperText>
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          loading={isButtonLoading}
        >
          Iniciar sesión
        </Button>

        <Button mode="text" onPress={handleLogin} style={styles.button}>
          ¿No tienes una cuenta?
        </Button>
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  formContainer: {
    width: "60%",
  },
  textInputContent: {
    marginBottom: 15,
  },
  button: {
    marginBottom: 15,
  },
  registerText: {
    textAlign: "center",
    marginBottom: 10,
  },
})
