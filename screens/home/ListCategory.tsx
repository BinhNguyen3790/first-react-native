import React from "react";
import Category from '../components/Category'
import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
const ListCategory = () => {
  const fakeData = [
    {
      id: 1, image: require("../../assets/imgs/pic_list_01.png")
    },
    {
      id: 2, image: require("../../assets/imgs/pic_list_02.png")
    },
    {
      id: 3, image: require("../../assets/imgs/pic_list_03.png")
    },
    {
      id: 4, image: require("../../assets/imgs/pic_list_04.png")
    },
    {
      id: 5, image: require("../../assets/imgs/pic_list_01.png")
    },
    {
      id: 6, image: require("../../assets/imgs/pic_list_02.png")
    },
    {
      id: 7, image: require("../../assets/imgs/pic_list_03.png")
    },
    {
      id: 8, image: require("../../assets/imgs/pic_list_04.png")
    },
  ]
  return (
    <>
      <Category title="Danh Mục 1" />
      <FlatList horizontal={true} data={fakeData} renderItem={({ item }) =>
        <View style={styles.item}><Image style={styles.itemImg} source={item.image} /></View>
      } />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    margin: -5
  },
  item: {
    // width: "25%",
    // padding: 5,
    width: 100,
    marginRight: 10
  },
  itemImg: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: '100%'
  }
})

export default ListCategory