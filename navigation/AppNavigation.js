import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../src/page/LoginScreen/LoginScreen';
import GetCode from '../src/page/GetCode/GetCode';
import Register from '../src/page/Register/Register';
import RegisterDriver from '../src/page/RegisterDriver/RegisterDriver';
import Main from '../src/page/Main/Main';
import HeaderLeft from '../src/components/HeaderLeft/HeaderLeft';
import HeaderCenter from '../src/components/HeaderCenter/HeaderCenter';
import Categories from '../src/page/Categories/Categories';

const Stack = createNativeStackNavigator();

const headerOptions = (title, typeHeaderLeft) => {
  return {
    headerLeft: () => <HeaderLeft type={typeHeaderLeft} />,
    headerTransparent: true,
    headerTitle: title,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 17,
      lineHeight: 20,
      color: '#484653',
    },
  };
};

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'Main'}>
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
        name="Categories"
        component={Categories}
        options={headerOptions('Выбор категории', 'arrow')}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={headerOptions('Главная', 'menu')}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
