import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAppSelector} from '../src/utils/hooks';

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
import Orders from '../src/page/Orders/Orders';
import PhotoReport from '../src/page/PhotoReport/PhotoReport';
import MapOrder from '../src/page/CreateOrder/components/MapOrder/MapOrder';
import Rules from '../src/page/Rules/Rules';
import Pers from '../src/page/Pers/Pers';

const Stack = createNativeStackNavigator();

const headerOptions = (title, typeHeaderLeft) => {;
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
  const authorization = useAppSelector(state => state.auth.authorization);

  return (
    <Stack.Navigator>
      {authorization ? (
        <>
          <Stack.Screen
            name="Main"
            component={Main}
            options={headerOptions('Главная', 'menu')}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={headerOptions('Выбор категории', 'arrow')}
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
          <Stack.Screen
            name="Orders"
            component={Orders}
            options={headerOptions('Оформление заказа', 'arrow')}
          />
          <Stack.Screen
            name="PhotoReport"
            component={PhotoReport}
            options={headerOptions('Фотоотчет', 'arrow')}
          />
          <Stack.Screen
            name="MapOrder"
            component={MapOrder}
            options={headerOptions('', 'arrow')}
          />
        </>
      ) : (
        <>
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
        </>
      )}
      <Stack.Screen
        name="RegisterDriver"
        component={RegisterDriver}
        options={headerOptions('', 'arrow')}
      />
      <Stack.Screen
        name="Rules"
        component={Rules}
        options={headerOptions('Условия использования', 'arrow')}
      />
      <Stack.Screen
        name="Pers"
        component={Pers}
        options={headerOptions('Политика конфиденциальности', 'arrow')}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
