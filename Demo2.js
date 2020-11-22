import React, {useState, useMemo, useEffect} from 'react';
import TabBar from './routes/TabBar';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from './auth/AuthContext';
import Login from './screens/Login';
const Drawer = createDrawerNavigator();

const App = () => {
  const [userToken, setuserToken] = useState(null);
  const authContext = useMemo(() => ({
    signIn: () => {
      setuserToken('ass');
    },
    signOut: () => {
      setuserToken(null);
    },
  }));
  return (
    <>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {Boolean(userToken) ? (
            <Drawer.Navigator>
              <Drawer.Screen name="Home" component={TabBar} />
            </Drawer.Navigator>
          ) : (
            <Login />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
};
export default App;
