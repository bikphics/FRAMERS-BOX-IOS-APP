import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getCatagories();
  }, []);

  const getCatagories = async () => {
    const res = await axios.get('https://dotwork.in/api/allcategories');

    if (res.status === 200) {
      setAllCategories(res.data.data);
    }
  };

  return (
    <>
      <View style={styles.container}>{/* <Text>Categories</Text> */}</View>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryList}>
          {allCategories.map((category) => {
            let imgUrl = {uri: `http://dotwork.in/${category.image}`};
            return (
              <TouchableOpacity key={category.categories_id}>
                <View style={styles.categoryItem}>
                  <Image style={styles.CategoryImage} source={imgUrl} />
                  <Text style={styles.categoryText}>
                    {category.categories_name}
                  </Text>
                  <Text style={styles.totalProduct}>
                    {category.total_products} products
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}

          {/* <TouchableOpacity>
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
          </TouchableOpacity> */}
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
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  categoryText: {
    padding: 10,
    fontSize: 17,
    fontWeight: '800',
  },
  totalProduct: {
    fontSize: 13,
    color: 'red',
  },
});
