import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/User/Profile';
import Favourite from '../Screens/Product/Favourite';
import ProductDetail from '../Screens/Product/ProductDetail';
import Cart from '../Screens/Cart/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogIn from '../Screens/Auth/LogIn';
import SIgnUp from '../Screens/Auth/SIgnUp';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import {COLOR} from '../Config/AppConfig';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();

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
const ProfileStackNavigation = () => {
  return (
    <ProfileStack.Navigator screenOptions={screenOptionStyle}>
      <ProfileStack.Screen name="ProfileScreen" component={Profile} />
      <ProfileStack.Screen name="LogInScreen" component={LogIn} />
      <ProfileStack.Screen name="SIgnUpScreen" component={SIgnUp} />
      <ProfileStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPassword}
      />
    </ProfileStack.Navigator>
  );
};

// Bottom Tav Navigator
const HomeNavigation = ({navigation}) => {
  return (
    <Tab.Navigator barStyle={{backgroundColor: COLOR.PRIMARY}}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: 'All Categories',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigation}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
