import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import Header from '../../Components/Header';
import {COLOR} from '../../Config/AppConfig';

const Profile = (props) => {
  return (
    <>
      <Header title="Profile" navigation={props.navigation} />
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.info}>Bikashranjandash2@gmail.com</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>
          <Button
            mode="contained"
            color={COLOR.PRIMARY}
            onPress={() => props.navigation.navigate('LogInScreen')}
            style={styles.buttonContainer}>
            Login
          </Button>
          <Button
            mode="contained"
            color={COLOR.PRIMARY}
            onPress={() => props.navigation.navigate('SIgnUpScreen')}
            style={styles.buttonContainer}>
            Register Now
          </Button>
        </View>
      </View>
    </>
  );
};

export default Profile;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#178c56',
    height: 100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 80,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 15,
    width: 250,
    minHeight: 38,
    borderRadius: 30,
  },
});
