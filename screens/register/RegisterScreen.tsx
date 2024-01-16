import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
const RegisterScreen = ({ navigation }: any) => {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const onSubmit = () => {
    let dataLogin = {
      email: email,
      password: password,
      // remember: remember
    }
    axios.post("https://60b98fee80400f00177b68e5.mockapi.io/api/account", dataLogin)
      .then((res) => {
        console.log(res);
        if (res.data) {
          Alert.alert("let go to login")
          navigation.navigate('Login')
        }
      })
      .catch((err) => {
        console.log(err);

      })

    // const regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // console.log(regexEmail.test(email));

    // if (regexEmail.test(email)) {
    //   setCheckEmail(false);
    // } else {
    //   setCheckEmail(true);
    // }

    // if (password !== '') {
    //   setCheckPassword(false);
    // } else {
    //   setCheckPassword(true);
    // }

    // if (regexEmail.test(email) && password !== '') {
    //   console.log(dataLogin);
    // }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={"dark-content"}></StatusBar>
      <Text style={styles.heading}>Register</Text>
      <View style={styles.desc}>
        <Text>By signing in you are agreeing</Text>
        <View style={styles.textPolicy}>
          <Text>our </Text>
          <TouchableOpacity >
            <Text style={styles.textBlue}>Term and privacy policy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Icon style={styles.formIcon} name="mail" size={30} />
          <TextInput style={styles.formInput} placeholder="Email Address" onChangeText={(e) => setEmail(e)}></TextInput>
          {checkEmail ? <Text style={styles.formError}>Email incorrect!</Text> : ''}
        </View>
        <View style={styles.formGroup}>
          <Icon style={styles.formIcon} name="lock" size={30} />
          <TextInput style={styles.formInput} placeholder="Password" secureTextEntry={true} onChangeText={(e) => setPassword(e)}></TextInput>
          {checkPassword ? <Text style={styles.formError}>Password incorrect!</Text> : ''}
        </View>
        <View style={styles.formGroup}>
          <Icon style={styles.formIcon} name="lock" size={30} />
          <TextInput style={styles.formInput} placeholder="Password-re" secureTextEntry={true} onChangeText={(e) => setPassword(e)}></TextInput>
          {checkPassword ? <Text style={styles.formError}>Password incorrect!</Text> : ''}
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formGroupFlexParent}>
            <View style={styles.formGroupFlex}>
              <CheckBox
                style={styles.formCheck}
                disabled={false}
                value={remember}
                onValueChange={() => setRemember(!remember)}
              />
              <Text>Remember me</Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert("hello!")}>
              <Text style={styles.formForgot}>Forgot password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formGroup}>
          <TouchableOpacity onPress={onSubmit}>
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
  formError: {
    color: "red"
  },
  footer: {
    marginTop: 50
  },
  footerBg: {
    width: "100%",
  }
})

export default RegisterScreen;