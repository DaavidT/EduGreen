import { Image, ImageStyle, ScrollView, View, ViewStyle } from "react-native"
import { Card } from "react-native-paper"

import React, { FC, useEffect, useState } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screen, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage"
import { observer } from "mobx-react-lite"

interface HomeScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Home">> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  const [imgUpload, setImgUpload] = useState("")
  const [imgList, setImgList] = useState([])

  const storage = getStorage()

  useEffect(() => {
    // Create a reference under which you want to list
    const listRef = ref(storage, "images/")

    listAll(listRef)
      .then((res) => {
        const downloadPromises = res.items.map((itemRef) =>
          getDownloadURL(itemRef).then((url) => {
            return url
          }),
        )
        Promise.all(downloadPromises)
          .then((urls) => {
            setImgList(urls)
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <Screen style={styles.container} preset="fixed" safeAreaEdges={["top"]}>
      <Text text="Información relevante" preset="heading" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {imgList.map((url, index) => (
          <Card mode="elevated">
            <Card.Cover key={index} source={{ uri: url }} style={imagesStyles} />
            <Card.Title title="Card Title" subtitle="Card Subtitle" />
          </Card>
        ))}
      </ScrollView>
    </Screen>
  )
})

const imagesStyles: ImageStyle = {
  width: "100%",
  height: undefined,
  aspectRatio: 1, // Keeps the original aspect ratio of the image
  resizeMode: "contain",
}

const styles = {
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1, // Keeps the original aspect ratio of the image
    resizeMode: "contain",
    marginBottom: 20,
  },
}
