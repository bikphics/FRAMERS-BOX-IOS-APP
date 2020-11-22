import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import axios from 'axios';
const Component = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const res = await axios.get('https://dotwork.in/api/getbanners');

    if (res.status === 200) {
      setImage(res.data.data);
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={StyleSheet.wrapper}
        dotStyle={{
          width: 15,
          height: 5,
          borderRadius: 10,
          backgroundColor: '#eee',
        }}
        activeDotColor="#FFF"
        activeDotStyle={{
          width: 30,
          height: 6,
          borderRadius: 10,
          backgroundColor: '#fff',
          activeDotColor: '#FFF',
        }}>
        {image.map((img) => {
          let imgUrl = {uri: `http://dotwork.in/${img.image}`};
          return (
            <View style={styles.slide} key={img.id}>
              <Image source={imgUrl} style={{width: 390, height: 220}} />
            </View>
          );
        })}
        {/* <View style={styles.slide}>
          <Image
            source={require('../image/slide1.png')}
            style={{width: 360, height: 220}}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../image/slide2.png')}
            style={{width: 360, height: 220}}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../image/slide3.png')}
            style={{width: 360, height: 220}}
          />
        </View> */}
      </Swiper>
    </View>
  );
};

export default Component;

const styles = StyleSheet.create({
  container: {
    height: 230,
  },
  wrapper: {},
  slide: {
    alignItems: 'center',
  },
});
