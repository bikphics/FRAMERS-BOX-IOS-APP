import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';
import Swiper from '../../Components/Swiper';

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView horizontal={false}>
        <Swiper />
        <Categories />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
