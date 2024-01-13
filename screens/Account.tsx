import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Account = () => {
  return (
    <SafeAreaView>
      <View style={styles.BtnGroup}>
        <TouchableOpacity style={styles.btn}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>History buy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Waiding buy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>waiding move</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Stuff</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  BtnGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop:30
  },
  btn: {
    padding: 15,
    backgroundColor: "#27B7C0",
    borderRadius:10
  }
})

export default Account;