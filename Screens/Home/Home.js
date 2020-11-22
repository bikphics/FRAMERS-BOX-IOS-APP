import React from 'react';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';
import Swiper from '../../Components/Swiper';

const Home = (props) => {
  return (
    <>
      <Header title="Dot Work" navigation={props.navigation} />
      <>
        <Swiper />
        <Categories />
      </>
    </>
  );
};

export default Home;
