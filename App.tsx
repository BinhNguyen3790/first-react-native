import React from 'react';
import HomeScreen from './screens/home/HomeScreen';
import AccountScreen from './screens/Account';
import LoginScreen from './screens/login/LoginScreen';
import DemoScroll from './screens/DemoScroll';
import SectionListView from './screens/SectionListView';
import ListCategory from './screens/home/ListCategory';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        <Text>Welcome: {name}</Text>
        <Text>Contact Screen me: {obj.name}</Text>
        <Text>Price: {obj.price}</Text>
      </View>
    </>
  )
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  return (

    // <HomeScreen />
    // <LoginScreen />
    // <DemoScroll />
    // <SectionListView />
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator> */}
      <Tab.Navigator screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'enter' : 'enter-outline';
            } else if (route.name === 'List') {
              iconName = focused ? 'heart-dislike-circle' : 'heart-dislike-circle-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })
      }>
        <Tab.Screen name="Account" component={AccountScreen}></Tab.Screen>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Login" component={LoginScreen}></Tab.Screen>
        <Tab.Screen name="List" component={SectionListView}></Tab.Screen>
      </Tab.Navigator>
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


