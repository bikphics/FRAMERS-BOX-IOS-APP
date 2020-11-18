import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Categories = () => {
  return (
    <>
      <View style={styles.container}>{/* <Text>Categories</Text> */}</View>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryList}>
          <TouchableOpacity>
            <View style={styles.categoryItem}>
              <Image
                style={styles.CategoryImage}
                source={require('../image/veg1.jpg')}
              />
              <Text style={styles.categoryText}>Fruits</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.categoryItem}>
              <Image
                style={styles.CategoryImage}
                source={require('../image/veg2.jpg')}
              />
              <Text style={styles.categoryText}>Grocery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.categoryItem}>
              <Image
                style={styles.CategoryImage}
                source={require('../image/veg3.jpg')}
              />
              <Text style={styles.categoryText}>Cleaners</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.categoryItem}>
              <Image
                style={styles.CategoryImage}
                source={require('../image/veg1.jpg')}
              />
              <Text style={styles.categoryText}>Fruits</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.categoryItem}>
              <Image
                style={styles.CategoryImage}
                source={require('../image/veg2.jpg')}
              />
              <Text style={styles.categoryText}>Grocery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.categoryItem}>
              <Image
                style={styles.CategoryImage}
                source={require('../image/veg3.jpg')}
              />
              <Text style={styles.categoryText}>Cleaners</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingBottom: 8,
  },
  categoryList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  categoryItem: {
    marginVertical: 10,
    width: 160,
    height: 180,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    marginHorizontal: 7,
    padding: 10,
    borderRadius: 10,
  },
  CategoryImage: {
    height: 100,
    width: 100,
  },
  categoryText: {
    padding: 10,
    fontWeight: '800',
  },
});
