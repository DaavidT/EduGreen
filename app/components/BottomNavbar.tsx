import { Image, TouchableOpacity, View } from "react-native"

import * as React from "react"

import { faGlobe, faIdCard, faNewspaper, faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useTheme } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"

type NavbarProps = {
  navigation: any
}

export const Navbar = (props: NavbarProps) => {
  const logo = require("../../assets/images/logo.png")
  const theme = useTheme()
  const colors = theme.colors
  const { navigation } = props

  return (
    <View style={{ position: "relative" }}>
      <View
        style={{
          height: 80,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 73,
            backgroundColor: colors.background,
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            columnGap: 100,
          }}
        ></View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <FontAwesomeIcon
            icon={faGlobe}
            style={{
              color: "white",
            }}
            size={32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <FontAwesomeIcon
            icon={faIdCard}
            style={{
              color: "white",
            }}
            size={32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#0c494f",
            width: 60,
            height: 60,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 999999,
            marginHorizontal: 25,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Image source={logo} style={{ width: "100%", height: "100%" }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <FontAwesomeIcon
            icon={faNewspaper}
            style={{
              color: "white",
            }}
            size={32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Home")
          }}
        >
          <FontAwesomeIcon
            icon={faUserSecret}
            style={{
              color: "white",
            }}
            size={32}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
