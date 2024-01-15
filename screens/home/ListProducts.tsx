import React, { useEffect, useState } from "react";
import Category from '../components/Category'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import Waiting from "../components/Waiting";
const ListProducts = () => {
  // const fakeData = [
  //   {
  //     id: 1, image: require("../../assets/imgs/pic_girl.jpg")
  //   },
  //   {
  //     id: 2, image: require("../../assets/imgs/pic_girl.jpg")
  //   },
  //   {
  //     id: 3, image: require("../../assets/imgs/pic_girl.jpg")
  //   },
  //   {
  //     id: 4, image: require("../../assets/imgs/pic_girl.jpg")
  //   },
  //   {
  //     id: 5, image: require("../../assets/imgs/pic_girl.jpg")
  //   },
  //   {
  //     id: 6, image: require("../../assets/imgs/pic_girl.jpg")
  //   },
  //   {
  //     id: 7, image: require("../../assets/imgs/pic_girl.jpg")
  //   },
  //   {
  //     id: 8, image: require("../../assets/imgs/pic_girl.jpg")
  //   },
  // ]

  const [games, setGames] = useState([]);

  // const getApi = () => {
  //   return fetch("https://60b98fee80400f00177b68e5.mockapi.io/api/games")
  //     .then((res) => res.json())
  //     .then((data) => setGames(data))
  //     .catch(err => console.log(err))
  // }

  const [loading, setLoading] = useState(true);

  const getApi = async () => {
    try {
      const respone = await fetch("https://60b98fee80400f00177b68e5.mockapi.io/api/games");
      const data = await respone.json();
      setGames(data);
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {

    getApi();

  }, [])

  return (
    <>
      <Category title="Danh Mục 2" />
      {loading ? (<Waiting />) : (
        <FlatList scrollEnabled={false} numColumns={2} columnWrapperStyle={styles.container} data={games} renderItem={({ item }: any) =>
          <View style={styles.item}>
            <View style={styles.content}>
              {/* <Image style={styles.itemImg} source={{ uri: item.avatar }} /> */}
              <Image style={styles.itemImg} source={require("../../assets/imgs/pic_girl.jpg")} />
              <View style={styles.text}><Text style={styles.textTxt}>{item.name}</Text></View>
            </View>
          </View>
        } />
      )}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textTxt: {
    color: "white",
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