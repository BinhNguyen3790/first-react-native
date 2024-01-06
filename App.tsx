import React from 'react';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import DemoScroll from './screens/DemoScroll';
import SectionListView from './screens/SectionListView';
import ListCategory from './screens/home/ListCategory';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation}:any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='change page' onPress={()=>navigation.navigate("Contact")}/>
    </View>
  )
}

const Contact = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
    </View>
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
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;

