import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
const LoginScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
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
          <Icon style={styles.formIcon} name="lock" size={30} />
          <TextInput style={styles.formInput} placeholder="Password" secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formGroupFlexParent}>
            <View style={styles.formGroupFlex}>
              <CheckBox
                style={styles.formCheck}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
              />
              <Text>Remember me</Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert("hello!")}>
              <Text style={styles.formForgot}>Forgot password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formGroup}>
          <TouchableOpacity onPress={() => Alert.alert("hello!")}>
            <Text style={styles.formButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Image style={styles.footerBg} source={require('../../assets/imgs/subtract.png')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column"
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
    marginTop: 50,
    paddingHorizontal: 30,
    flex: 1
  },
  formGroup: {
    position: "relative",
    marginBottom: 20
  },
  formGroupFlex: {
    flexDirection: "row",
    alignItems: "center"
  },
  formGroupFlexParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
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
  formCheck: {
    marginLeft: 0,
    paddingLeft: 0
  },
  formForgot: {
    color: 'red',
  },
  formButton: {
    backgroundColor: '#0386D0',
    borderRadius: 5,
    textAlign: 'center',
    color: "#fff",
    paddingVertical: 15
  },
  formIcon: {
    fontSize: 20,
    position: "absolute",
    left: 0,
    top: 9,
  },
  footer: {},
  footerBg: {
    width: "100%"
  }
})

export default LoginScreen;