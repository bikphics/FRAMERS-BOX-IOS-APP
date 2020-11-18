import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';

const Favourite = () => {
  return (
    <View>
      <Header />
      <Categories />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
