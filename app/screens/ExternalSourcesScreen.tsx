import { Animated, View, ViewStyle } from "react-native"
import { ActivityIndicator } from "react-native-paper"

import React, { FC, useEffect, useRef } from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ExternalSourceItem, Screen, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { api } from "app/services/api"
import { observer } from "mobx-react-lite"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ExternalSourcesScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<"ExternalSources">> {}

export const ExternalSourcesScreen: FC<ExternalSourcesScreenProps> = observer(
  function ExternalSourcesScreen({ navigation }) {
    const [news, setNews] = React.useState([])

    useEffect(() => {
      const news = async () => {
        api.getNews().then((response) => {
          setNews(response.data)
        })
      }
      news()
    }, [])

    const scrollY = useRef(new Animated.Value(0)).current
    const [isLoading, setIsLoading] = React.useState(false)
    return (
      <View style={{ flex: 1, backgroundColor: "#365b2d" }}>
        <Animated.FlatList
          style={{ flex: 1, paddingTop: 120, marginBottom: 20 }}
          data={news}
          renderItem={({ item }) => <ExternalSourceItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
            useNativeDriver: false,
          })}
          ListFooterComponent={
            isLoading ? (
              <ActivityIndicator size="large" color="green" style={{ marginBottom: 200 }} />
            ) : (
              <View style={{ height: 200 }}></View>
            )
          }
          onEndReached={() => {}}
          onEndReachedThreshold={0.1}
        ></Animated.FlatList>
      </View>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
