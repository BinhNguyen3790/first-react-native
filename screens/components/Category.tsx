import React from "react";
import { StyleSheet, Text, View } from "react-native";

type CategoryProps = {
  title: string
}

const Category = ({ title }: CategoryProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>Xem thêm</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
})
export default Category;