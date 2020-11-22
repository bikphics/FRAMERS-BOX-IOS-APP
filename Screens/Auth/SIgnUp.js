import React from 'react';
import {Image, KeyboardAvoidingView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import {COLOR} from '../../Config/AppConfig';
const SIgnUp = (props) => {
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
          <TextInput
            label="Confirm Password"
            mode="outlined"
            secureTextEntry
            style={{marginVertical: 5}}
          />

          <Button
            color={COLOR.PRIMARY}
            style={{marginVertical: 20}}
            mode="contained"
            onPress={() => {}}>
            SIgnUp
          </Button>
        </>

        <View style={{marginVertical: 10}}>
          <Text>Already have an account? </Text>
          <Button
            color={COLOR.PRIMARY}
            onPress={() => props.navigation.navigate('LogInScreen')}>
            Log In
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SIgnUp;
