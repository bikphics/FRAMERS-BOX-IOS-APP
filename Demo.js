import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// NOTE Import all required pages
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {backgroundColor: 'blue'},
            headerLeft: () => (
              <Ionicons.Button
                name="menu"
                color="#fff"
                size={25}
                backgroundColor="blue"
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
            ),
            headerTintColor: '#fff',
          }}
        />
      </HomeStack.Navigator>
    </>
  );
};
const ProfileScreen = ({navigation}) => {
  return (
    <>
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {backgroundColor: 'blue'},
            headerLeft: () => (
              <Ionicons.Button
                name="menu"
                color="#fff"
                size={25}
                backgroundColor="blue"
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
            ),
            headerTintColor: '#fff',
          }}
        />
      </ProfileStack.Navigator>
    </>
  );
};

const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
