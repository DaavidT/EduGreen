import { ScrollView, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { Button, Card, HelperText, TextInput } from "react-native-paper"

import * as React from "react"
import { Controller, useForm } from "react-hook-form"

import { Text } from "app/components/Text"
import { api } from "app/services/api"
import { colors, typography } from "app/theme"
import { observer } from "mobx-react-lite"

export interface RegisterUserFormProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  onSubmit?: (data: any) => void
}

/**
 * Describe your component here
 */
export const RegisterUserForm = observer(function RegisterUserForm(props: RegisterUserFormProps) {
  type FormValues = {
    name: string
    lastName: string
    age: string
    email: string
    comments: string
  }

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setError,
  } = useForm<FormValues>()
  // const { onSubmit } = props
  const onSubmit = (data) => {
    try {
      const { name, lastName, age, email, comments } = data
      const response = api.writeUserData(name, lastName, age, email, comments)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView style={{}}>
      <Card style={$card} elevation={4}>
        <Card.Content style={{ backgroundColor: "transparent" }}>
          <Text text="Registro de contacto" preset="heading" style={$title} />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Nombre"
                mode="flat"
                style={$input}
                textColor="white"
                cursorColor="white"
                underlineColor="white"
                value={value}
                onChangeText={onChange}
              />
            )}
            name="name"
            rules={{ required: true, minLength: 3 }}
          />
          {errors.name && (
            <Text style={$ErrorLabel}>{errors.name.message || "Mínimo 3 carácteres"}</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Apellidos"
                mode="flat"
                style={$input}
                textColor="white"
                cursorColor="white"
                underlineColor="white"
                value={value}
                onChangeText={onChange}
              />
            )}
            name="lastName"
            rules={{ required: true, minLength: 3 }}
          />
          {errors.lastName && (
            <Text style={$ErrorLabel}>{errors.lastName.message || "Mínimo 3 carácteres"}</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Edad"
                mode="flat"
                style={$input}
                textColor="white"
                cursorColor="white"
                underlineColor="white"
                value={value}
                onChangeText={onChange}
              />
            )}
            name="age"
            rules={{ required: true }}
          />
          {errors.age && <Text style={$ErrorLabel}>{errors.age.message || "Sólo números"}</Text>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Correo electrónico"
                mode="flat"
                style={$input}
                textColor="white"
                cursorColor="white"
                underlineColor="white"
                value={value}
                onChangeText={onChange}
              />
            )}
            name="email"
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
          />
          {errors.email && (
            <Text style={$ErrorLabel}>{errors.email.message || "Correo inválido"}</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Comentarios"
                mode="flat"
                style={$input}
                textColor="white"
                cursorColor="white"
                underlineColor="white"
                value={value}
                onChangeText={onChange}
                multiline
              />
            )}
            name="comments"
            rules={{ minLength: 3 }}
          />
          {errors.comments && (
            <Text style={$ErrorLabel}>{errors.comments.message || "Minimo 3 caracteres"}</Text>
          )}

          <Button mode="outlined" onPress={handleSubmit(onSubmit)}>
            Registrar
          </Button>
        </Card.Content>
      </Card>
      <View style={{ height: 100 }} />
    </ScrollView>
  )
})

const $card: ViewStyle = {
  marginTop: 20,
  backgroundColor: "#74ad65",
}

const $title: TextStyle = {
  marginBottom: 16,
  fontSize: 24,
  fontWeight: "bold",
}

const $input: ViewStyle = {
  marginBottom: 20,
  backgroundColor: "#74ad65",
}

const $ErrorLabel: TextStyle = {
  color: colors.error,
  fontSize: 12,
  marginTop: 5,
  marginBottom: 5,
  textAlign: "center",
}
