/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { useColorScheme } from "react-native"

import React from "react"

import { NavigationContainer, useTheme } from "@react-navigation/native"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import { Navbar } from "app/components"
import { app } from "app/components/hooks/firebaseConfig"
import { useStores } from "app/models"
import * as Screens from "app/screens"
import { observer } from "mobx-react-lite"

import Config from "../config"
import { DarkTheme, LightTheme } from "../theme"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Welcome: undefined
  Home: undefined
  RegisterUser: undefined
  SocialMedia: undefined
  Credits: undefined
  ExternalSources: undefined
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  const {
    authenticationLogin: { authLogged },
  } = useStores()

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={authLogged ? "Home" : "Welcome"}
    >
      {authLogged ? (
        <>
          <Stack.Screen name="Home" component={Screens.HomeScreen} />
          <Stack.Screen name="ExternalSources" component={Screens.ExternalSourcesScreen} />
          <Stack.Screen name="RegisterUser" component={Screens.RegisterUserScreen} />
          <Stack.Screen name="SocialMedia" component={Screens.SocialMediaScreen} />
          <Stack.Screen name="Credits" component={Screens.CreditsScreen} />
        </>
      ) : (
        <Stack.Screen name="Welcome" component={Screens.WelcomeScreen} />
      )}
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()
  // Inicializamos la app con la configuración de firebase
  const firebaseConfig = app
  const {
    authenticationLogin: { authLogged },
  } = useStores()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer ref={navigationRef} theme={DarkTheme} {...props}>
      <AppStack />
      {authLogged ? <Navbar navigation={navigationRef} /> : null}
    </NavigationContainer>
  )
})
