import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import Category from './Category'
import ListCategory from './ListCategory'
const HomeScreen = () => {
  return (
    <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
      <Header />
      <Category />
      <ListCategory/>
    </View>
  )

};

export default HomeScreen;