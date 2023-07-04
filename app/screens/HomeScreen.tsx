import {
  Animated,
  Dimensions,
  Image,
  ImageStyle,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native"

import React, { FC, useEffect, useRef, useState } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Card, Screen, Text, TitleLayout } from "app/components"
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

  const scrollY = useRef(new Animated.Value(0)).current
  return (
    <TitleLayout title="Bienvenido a EduGreen" scrollY={scrollY}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 50,
            paddingTop: 120,
          }}
        >
          <Text text={getAuthUser} preset="heading" />
          <Card
            verticalAlignment="center"
            preset="reversed"
            heading="Nuestra meta es dar a conocer información para que ayudes al planeta"
            content="Da click en las imagenes para ver mas informacion"
            contentStyle={{ marginVertical: 20 }}
          />
        </View>
        <Modal visible={modalVisible} transparent={true}>
          <View style={styles.modal}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text text="Cerrar" preset="subheading" />
            </TouchableOpacity>
            <Image source={{ uri: url }} style={imagesStyles} />
          </View>
        </Modal>
        <View style={styles.imageContainer}>{images}</View>
      </ScrollView>
    </TitleLayout>
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
