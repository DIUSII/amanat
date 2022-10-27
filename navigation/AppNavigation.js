import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../src/page/LoginScreen/LoginScreen';
import GetCode from '../src/page/GetCode/GetCode';
import Register from '../src/page/Register/Register';
import RegisterDriver from '../src/page/RegisterDriver/RegisterDriver';
import Main from '../src/page/Main/Main';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetCode"
        component={GetCode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterDriver"
        component={RegisterDriver}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
