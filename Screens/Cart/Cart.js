import React from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import {Appbar, Button, Card, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
const Cart = () => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action
          icon={() => <Icon name="arrow-back" color="#fff" size={24} />}
          onPress={() => {}}
        />
        <Appbar.Content title="My Cart" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView style={{padding: 10, height: '100%'}}>
        <Card>
          <Card.Title title="Brown Onion" subtitle="Vegetables" />
          <Card.Content
            style={{
              borderTopColor: '#00000033',
              borderTopWidth: 1,
              padding: 18,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: 'https://picsum.photos/700'}}
                style={{width: 80, height: 80, resizeMode: 'center'}}
              />
              <View>
                <View>
                  <Subheading>Product Price: $100</Subheading>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Subheading>Quantity:</Subheading>
                  <View
                    style={{
                      marginLeft: 4,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Button>
                      <Icon size={16} name="caret-back-outline" />{' '}
                    </Button>
                    <Button>1</Button>
                    <Button>
                      <Icon size={16} name="caret-forward-outline" />{' '}
                    </Button>
                  </View>
                </View>
                <View>
                  <Subheading>Total Price: $100</Subheading>
                </View>
              </View>
            </View>
          </Card.Content>
          <Card.Actions
            style={{borderTopColor: '#00000033', borderTopWidth: 1}}>
            <Button mode="contained">View</Button>
            <Button color="grey">Remove</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
