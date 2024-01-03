import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const DemoScroll = () => {
  const fakeData = [
    {
      id: 1, name: "image item 01", image: require("../assets/imgs/logo.png")
    },
    { id: 2, name: "image item 02", image: require("../assets/imgs/logo.png") },
    { id: 3, name: "image item 03", image: require("../assets/imgs/logo.png") },
    { id: 4, name: "image item 04", image: require("../assets/imgs/logo.png") },
    { id: 5, name: "image item 05", image: require("../assets/imgs/logo.png") },
    {
      id: 6, name: "image item 06", image: require("../assets/imgs/logo.png")
    },
    { id: 7, name: "image item 07", image: require("../assets/imgs/logo.png") },
    { id: 8, name: "image item 08", image: require("../assets/imgs/logo.png") },
    { id: 9, name: "image item 09", image: require("../assets/imgs/logo.png") },
    { id: 10, name: "image item 10", image: require("../assets/imgs/logo.png") },
  ]
  return (
    <>
      <Text style={styles.heading}>hello scrollview, flatList</Text>
      {/* <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.text}>Image Item</Text>
          <Image style={styles.img} source={require("../assets/imgs/logo.png")} />
        </View><View style={styles.item}>
          <Text style={styles.text}>Image Item</Text>
          <Image style={styles.img} source={require("../assets/imgs/logo.png")} />
        </View><View style={styles.item}>
          <Text style={styles.text}>Image Item</Text>
          <Image style={styles.img} source={require("../assets/imgs/logo.png")} />
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Image Item</Text>
          <Image style={styles.img} source={require("../assets/imgs/logo.png")} />
        </View>
      </View> */}
      {/* <ScrollView horizontal>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
          <View>
            <Text>Image Item</Text>
            <Image source={require("../assets/imgs/logo.png")} />
          </View>
        </ScrollView> */}
      <FlatList data={fakeData} renderItem={({ item }) =>
        <View>
          <Text>{item.name}</Text>
          <Image source={item.image} />
        </View>
      } />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    width: "50%",
    padding: 10
  },
  text: {
    textAlign: "center"
  },
  img: {
    width: "100%"
  },
  heading: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "red"
  }
})

export default DemoScroll;
