// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DriverRegistrationForm from '../screens/DriverRegistrationForm';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  const [isAuth, setAuth] = React.useState<String | null>();
  const getlogin = async () => {
    const isAuth = await AsyncStorage.getItem('login');
    setAuth(isAuth);
  };

  React.useEffect(() => {
    getlogin();
  }, []);
  return (
    <Stack.Navigator>
      {isAuth ? (
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="DriverRegistrationForm"
            component={DriverRegistrationForm}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default StackNavigation;
