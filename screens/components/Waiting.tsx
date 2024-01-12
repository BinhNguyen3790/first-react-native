import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const Waiting = () => {
  return (<>
    <View style={styles.content}>
      <View style={styles.img}></View>
      <View>
        <Text style={styles.text}></Text>
        <Text style={styles.textSm}></Text>
      </View>
    </View>
  </>);
}

const styles = StyleSheet.create({
  content: {
  },
  textSm: {
    width: "70%",
    backgroundColor: "#d4d4d4",
    marginTop: 10
  },
  img: {
    width: "100%",
    height: 200,
    backgroundColor: "#d4d4d4",
  },
  text: {
    width: "80%",  
    marginTop: 10,
    backgroundColor: "#d4d4d4"
  }
})

export default Waiting;