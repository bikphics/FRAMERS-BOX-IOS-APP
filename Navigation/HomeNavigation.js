import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/User/Profile';
import Favourite from '../Screens/Product/Favourite';
import ProductDetail from '../Screens/Product/ProductDetail';
import Cart from '../Screens/Cart/Cart';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};
const HomeStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

// Bottom Tav Navigator
const HomeNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
          justifyContent: 'center',
          paddingVertical: 15,
          backgroundColor: '#eff4f0',
          elevation: 2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image source={require('../image/home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: 'All Categories',
          tabBarIcon: ({color, size}) => (
            <Image source={require('../image/heart.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image source={require('../image/user.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Image source={require('../image/settings.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
