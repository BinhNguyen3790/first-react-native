import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import ListCategory from './ListCategory';
import ListProducts from './ListProducts';
const HomeScreen = () => {
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
      <Header />
      <ScrollView>
        <ListCategory />
        <ListProducts />
      </ScrollView>
    </View>
  )

};

export default HomeScreen;