import React from "react";
import { Alert, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={"dark-content"}></StatusBar>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.desc}>
        <Text>By signing in you are agreeing</Text>
        <View style={styles.textPolicy}>
          <Text>our </Text>
          <TouchableOpacity onPress={() => Alert.alert("hello!")}>
            <Text style={styles.textBlue}>Term and privacy policy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Icon style={styles.formIcon} name="mail" size={30} />
          <TextInput style={styles.formInput} placeholder="Email Address"></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Icon style={styles.formIcon} name="mail" size={30} />
          <TextInput style={styles.formInput} placeholder="Password" secureTextEntry={true}></TextInput>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 30
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    fontSize: 25,
    paddingVertical: 20,
    marginTop: 50
  },
  desc: {
    alignItems: "center",
    color: "#6B5E5E"
  },
  textPolicy: {
    flexDirection: "row"
  },
  textBlue: {
    color: "#0386D0"
  },
  form: {
    marginTop: 50
  },
  formGroup: {
    position: "relative",
    marginBottom: 20
  },
  'formGroup:last-child': {
    marginBottom: 0
  },
  formInput: {
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingLeft: 30,
    paddingVertical: 5
  },
  formIcon: {
    fontSize: 20,
    position: "absolute",
    left: 0,
    top: 9,
  }
})

export default LoginScreen;