import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';

const Favourite = (props) => {
  return (
    <View>
      <Header title="Favorites" navigation={props.navigation} />
      <Categories />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
