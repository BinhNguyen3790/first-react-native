import React from "react";
import Category from '../components/Category'
import { Image, StyleSheet, Text, View } from "react-native";
const ListProducts = () => {
  return (
    <>
      <Category title="Danh Mục" />
      <View style={styles.container}>
        <View style={styles.item}><View style={styles.content}><Text style={styles.sale}>Sale 30%</Text><View style={styles.text}></View></View></View>
        <View style={styles.item}><View style={styles.content}><View style={styles.text}></View></View></View>
        <View style={styles.item}><View style={styles.content}><View style={styles.text}></View></View></View>
        <View style={styles.item}><View style={styles.content}><View style={styles.text}></View></View></View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: -5
  },
  item: {
    width: "50%",
    height: 200,
    padding: 5
  },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    justifyContent: 'flex-end',
    position: "relative",
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