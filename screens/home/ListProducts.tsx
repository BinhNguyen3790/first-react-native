import React from "react";
import Category from '../components/Category'
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
const ListProducts = () => {
  const fakeData = [
    {
      id: 1, image: require("../../assets/imgs/pic_girl.jpg")
    },
    {
      id: 2, image: require("../../assets/imgs/pic_girl.jpg")
    },
    {
      id: 3, image: require("../../assets/imgs/pic_girl.jpg")
    },
    {
      id: 4, image: require("../../assets/imgs/pic_girl.jpg")
    },
    {
      id: 5, image: require("../../assets/imgs/pic_girl.jpg")
    },
    {
      id: 6, image: require("../../assets/imgs/pic_girl.jpg")
    },
    {
      id: 7, image: require("../../assets/imgs/pic_girl.jpg")
    },
    {
      id: 8, image: require("../../assets/imgs/pic_girl.jpg")
    },
  ]
  return (
    <>
      <Category title="Danh Mục 2" />
      <FlatList scrollEnabled={false} numColumns={2} columnWrapperStyle={styles.container} data={fakeData} renderItem={({ item }) =>
        <View style={styles.item}>
          <View style={styles.content}>
            <Image style={styles.itemImg} source={item.image} />
            <View style={styles.text}></View>
          </View>
        </View>
      } />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: -5,
  },
  item: {
    width: "50%",
    height: 200,
    padding: 5,
    marginBottom: 10
  },
  content: {
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
    // justifyContent: 'flex-end',
    position: "relative",
  },
  itemImg: {
    width: "100%",
    height: 150
  },
  text: {
    backgroundColor: "black",
    height: 40,
  },
  sale: {
    backgroundColor: "white",
    padding: 10,
    position: "absolute",
    top: 10,
    right: 10,
    color: 'black',
    fontWeight: 'bold',
  }
})

export default ListProducts