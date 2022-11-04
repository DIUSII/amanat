import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../src/page/LoginScreen/LoginScreen';
import GetCode from '../src/page/GetCode/GetCode';
import Register from '../src/page/Register/Register';
import RegisterDriver from '../src/page/RegisterDriver/RegisterDriver';
import Main from '../src/page/Main/Main';
import HeaderLeft from '../src/components/HeaderLeft/HeaderLeft';
import Categories from '../src/page/Categories/Categories';
import CreateOrder from '../src/page/CreateOrder/CreateOrder';
import Profile from '../src/page/Profile/Profile';
import ChangePhone from '../src/page/ChangePhone/ChangePhone';
import TypeDriver from '../src/page/TypeDriver/TypeDriver';

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
    <Stack.Navigator initialRouteName={'Login'}>
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
      <Stack.Screen
        name="CreateOrder"
        component={CreateOrder}
        options={headerOptions('Оформление заказа', 'arrow')}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={headerOptions('Личный кабинет', 'arrow')}
      />
      <Stack.Screen
        name="ChangePhone"
        component={ChangePhone}
        options={headerOptions('Изменить номер', 'arrow')}
      />
      <Stack.Screen
        name="TypeDriver"
        component={TypeDriver}
        options={headerOptions('Изменить вид транспорта', 'arrow')}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
