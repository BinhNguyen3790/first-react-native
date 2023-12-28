import React from "react";
import { Image, SectionList, StyleSheet, Text, View } from "react-native";
const SectionListView = () => {
  const data = [
    { title: "A", data: [{ id: 1, name: "Anh Nguyen" }, { id: 2, name: "An Thi" }] },
    { title: "B", data: [{ id: 3, name: "Anh Nguyen" }, { id: 4, name: "An Thi" }] },
    { title: "C", data: [{ id: 5, name: "Anh Nguyen" }, { id: 6, name: "An Thi" }] },
    { title: "D", data: [{ id: 7, name: "Anh Nguyen" }, { id: 8, name: "An Thi" }, { id: 9, name: "Anh Nguyen" }, { id: 10, name: "An Thi" }, { id: 11, name: "Anh Nguyen" }, { id: 12, name: "An Thi" }] },
  ]
  return (
    <>
      <Text style={styles.heading}>Hello</Text>

      <SectionList
        sections={data}
        renderItem={({ item }) =>
          <View style={styles.itemStyle}>
            <Image style={styles.image} source={require("../assets/imgs/pic_girl.jpg")} />
            <Text>{item.name}</Text>
          </View>
        }
        renderSectionHeader={({ section }) => <Text style={styles.head}>{section.title}</Text>}
        keyExtractor={item => `basicListEntry-${item.id}`}
      />
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 5,
    backgroundColor: "grey",
    color: "white"
  },
  head: {
    backgroundColor: "gray",
    color: "white",
    padding: 5
  },
  itemStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10
  }
})
export default SectionListView; 