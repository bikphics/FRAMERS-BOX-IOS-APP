import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.logo}>Dot Work</Text>
      </View>
      <View style={styles.headerIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.iconContainer}>
            <Image source={require('../image/cart.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Image source={require('../image/search.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#178c56',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    padding: 5,
  },
  headerIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 10,
  },
  logo: {
    fontWeight: '800',
    fontSize: 25,
    color: 'white',
  },
});
