import React from 'react';
import {Image, KeyboardAvoidingView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import {COLOR} from '../../Config/AppConfig';

const LogIn = (props) => {
  return (
    <ScrollView>
      <Image
        source={require('../../assets/logo.png')}
        style={{resizeMode: 'center', width: 200, height: 200}}
      />
      <KeyboardAvoidingView behavior="position" style={{padding: 10}}>
        <>
          <TextInput
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{marginVertical: 5}}
          />

          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            style={{marginVertical: 5}}
          />

          <Button
            color={COLOR.PRIMARY}
            style={{marginVertical: 10}}
            onPress={() => props.navigation.navigate('ForgotPasswordScreen')}>
            Forgot your password?
          </Button>

          <Button color={COLOR.PRIMARY} mode="contained" onPress={() => {}}>
            Login
          </Button>
        </>

        <View style={{marginVertical: 10}}>
          <Text>Don’t have an account? </Text>
          <Button
            color={COLOR.PRIMARY}
            style={{marginVertical: 20}}
            onPress={() => props.navigation.navigate('SIgnUpScreen')}>
            Register Now
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LogIn;
