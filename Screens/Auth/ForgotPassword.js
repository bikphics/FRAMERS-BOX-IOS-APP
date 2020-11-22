import React from 'react';
import {Image, KeyboardAvoidingView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import {COLOR} from '../../Config/AppConfig';

const ForgotPassword = (props) => {
  return (
    <ScrollView>
      <Image
        source={require('../../assets/logo.png')}
        style={{resizeMode: 'center', width: 200, height: 200}}
      />
      <KeyboardAvoidingView behavior="position" style={{padding: 10}}>
        <>
          <TextInput
            label="Enter Your Email"
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{marginVertical: 5}}
          />

          <Button
            color={COLOR.PRIMARY}
            style={{marginVertical: 20}}
            mode="contained"
            onPress={() => {}}>
            Send Link
          </Button>
        </>

        <View style={{marginVertical: 10}}>
          <Button
            color={COLOR.PRIMARY}
            onPress={() => props.navigation.goBack()}>
            Go BAck
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ForgotPassword;
