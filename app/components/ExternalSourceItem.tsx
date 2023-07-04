import { Image, Linking, StyleSheet, TouchableOpacity } from "react-native"

import React, { FC } from "react"

import { Text } from "app/components/Text"
import { typography } from "app/theme"

interface ExternalSourceItemProps {
  item: {
    id: number
    option_default: string
    image: string
    link: string
    description: string
  }
}

export const ExternalSourceItem: FC<ExternalSourceItemProps> = ({ item }) => {
  const handlePress = (link: string) => {
    Linking.canOpenURL(link).then((supported) => {
      if (supported) {
        Linking.openURL(link)
      }
    })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress(item.link)}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.option_default}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: "#DFE3D8",
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderRadius: 6,
    marginBottom: 8,
  },
  title: {
    fontFamily: typography.primary.bold,
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontFamily: typography.primary.normal,
    fontSize: 14,
  },
})
