import React from 'react';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import DemoScroll from './screens/DemoScroll';
import SectionListView from './screens/SectionListView';
import ListCategory from './screens/home/ListCategory';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/AntDesign';

const Home = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='change page' onPress={() => navigation.navigate("Contact", { name: "binhDev", obj: { id: 1, price: 2999, name: "book" } })} />
    </View>
  )
}

const Contact = ({ route, navigation }: any) => {
  const { name, obj } = route.params;
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text><Icon name="back" size={30} /> Go Back</Text>
        </TouchableOpacity>
        <Icon name="bells" size={30} />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contact Screen nme: {name}</Text>
      </View>
    </>
  )
}

const Stack = createNativeStackNavigator();


const App = () => {
  return (

    // <HomeScreen />
    // <LoginScreen />
    // <DemoScroll />
    // <SectionListView />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: 'grey'
  }
})
export default App;


