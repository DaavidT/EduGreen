import { TouchableOpacity, View } from "react-native"

import * as React from "react"

import { faBell, faLightbulb, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"

type NavbarProps = {
  navigation: any
}

export const Navbar = (props: NavbarProps) => {
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
            backgroundColor: "#262626",
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
            icon={faBell}
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
            icon={faLightbulb}
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
            icon={faUser}
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
