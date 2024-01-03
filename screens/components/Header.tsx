import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>atomics</Text>
      </View>
      <View>
        <Image source={require('../../assets/imgs/logo.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10
  },
  text: {
    fontSize: 50,
    color: "red",
    textTransform: "uppercase",
    fontWeight: "700"
  }
})

export default Header; 