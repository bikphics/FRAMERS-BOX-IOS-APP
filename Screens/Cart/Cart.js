import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {Button, Card, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../Components/Header';
import {COLOR} from '../../Config/AppConfig';
const Cart = (props) => {
  return (
    <>
      <Header title="Cart" navigation={props.navigation} cartHidden={true} />
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
                    <Button onPress={() => {}} color={COLOR.PRIMARY}>
                      <Icon size={16} name="caret-back-outline" />{' '}
                    </Button>
                    <Button color={COLOR.PRIMARY}>1</Button>
                    <Button onPress={() => {}} color={COLOR.PRIMARY}>
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
            <Button onPress={() => {}} color={COLOR.PRIMARY} mode="contained">
              View
            </Button>
            <Button onPress={() => {}} color="grey">
              Remove
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </>
  );
};

export default Cart;
