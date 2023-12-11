import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import ListCategory from './ListCategory';
import ListProducts from './ListProducts';
const HomeScreen = () => {
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
      <Header />
      <ListCategory />
      <ListProducts />
    </View>
  )

};

export default HomeScreen;