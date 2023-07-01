import {
  Dimensions,
  Image,
  ImageStyle,
  Modal,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native"

import React, { FC, useEffect, useState } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Card, Screen, Text } from "app/components"
import { Navbar } from "app/components/BottomNavbar"
import { useStores } from "app/models"
import { AppStackScreenProps } from "app/navigators"
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage"
import { observer } from "mobx-react-lite"

interface HomeScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Home">> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen({
  navigation: navigator,
}) {
  const [imgList, setImgList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [url, setUrl] = useState("")
  const {
    authenticationLogin: { getAuthUser },
  } = useStores()

  const storage = getStorage()
  useEffect(() => {
    // Create a reference under which you want to list
    const listRef = ref(storage, "images/")

    listAll(listRef)
      .then((res) => {
        const downloadPromises = res.items.map((itemRef) =>
          getDownloadURL(itemRef).then((url) => url),
        )
        Promise.all(downloadPromises)
          .then((urls) => {
            setImgList(urls)
          })
          .catch((error) => {})
      })
      .catch((error) => {})
  }, [])

  function openModal(url: string) {
    setModalVisible(true)
    setUrl(url)
  }

  let images = imgList.map((url, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => openModal(url)}>
        <View style={styles.imageWrapper} key={index}>
          <Image key={index} source={{ uri: url }} style={imagesStyles} />
        </View>
      </TouchableOpacity>
    )
  })

  return (
    <Screen style={styles.container} preset="scroll" safeAreaEdges={["top", "bottom"]}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 50,
          paddingTop: 20,
        }}
      >
        <Text text={getAuthUser} preset="heading" />
      </View>
      <Card
        verticalAlignment="center"
        heading="Bienvenido a EduGreen " // Aquí va el nombre del usuario
        headingStyle={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
        content="Nuestra meta es dar a conocer información para que ayudes al planeta"
        contentStyle={{ textAlign: "left", fontSize: 18 }}
        style={{
          backgroundColor: "#0bd17f",
          marginVertical: 10,
          marginHorizontal: 50,
          height: 200,
          borderColor: "#0bd17f",
        }}
      />
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text text="Cerrar" preset="subheading" />
          </TouchableOpacity>
          <Image source={{ uri: url }} style={imagesStyles} />
        </View>
      </Modal>
      <View style={styles.imageContainer}>{images}</View>
    </Screen>
  )
})

const imagesStyles: ImageStyle = {
  width: "100%",
  height: "100%",
  resizeMode: "stretch",
  backgroundColor: "white",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageWrapper: {
    margin: 2,
    padding: 2,
    height: 600,
    width: Dimensions.get("window").width / 2 - 4,
    backgroundColor: "#fff",
  },
  card: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#fff",
    height: 300,
    width: "100%",
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: "rgba(0,0,0,1)",
  },
})
