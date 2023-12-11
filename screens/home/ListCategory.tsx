import React from "react";
import Category from '../components/Category'
import { Image, StyleSheet, View } from "react-native";
const ListCategory = () => {
  return (
    <>
      <Category title="Danh Mục"/>
      <View style={styles.container}>
        <View style={styles.item}><Image style={styles.itemImg} source={require('../../assets/imgs/pic_list_01.png')} /></View>
        <View style={styles.item}><Image style={styles.itemImg} source={require('../../assets/imgs/pic_list_02.png')} /></View>
        <View style={styles.item}><Image style={styles.itemImg} source={require('../../assets/imgs/pic_list_03.png')} /></View>
        <View style={styles.item}><Image style={styles.itemImg} source={require('../../assets/imgs/pic_list_04.png')} /></View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: -5
  },
  item: {
    width: "25%",
    padding: 5
  },
  itemImg: {
    width: '100%'
  }
})

export default ListCategory