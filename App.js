import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './Navigation/HomeNavigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
