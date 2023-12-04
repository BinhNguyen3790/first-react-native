import React from "react";
import { StyleSheet, Text,View } from "react-native";
const Category = () => {
  return (
    <View style={styles.container}>
      <Text>Danh mục</Text>
      <Text>Xem thêm</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
})
export default Category;