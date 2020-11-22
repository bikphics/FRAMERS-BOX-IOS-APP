import React from 'react';
import {Appbar} from 'react-native-paper';
import {COLOR} from '../Config/AppConfig';

const Header = (props) => {
  return (
    <>
      <Appbar.Header style={{backgroundColor: COLOR.PRIMARY}}>
        <Appbar.Content title={props.title} />
        {!props.cartHidden && (
          <Appbar.Action
            icon="cart"
            onPress={() => props.navigation.navigate('ProductDetail')}
          />
        )}
        <Appbar.Action
          icon="magnify"
          onPress={() => props.navigation.navigate('ProductDetail')}
        />
      </Appbar.Header>
    </>
  );
};

export default Header;
