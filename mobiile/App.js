import React, {useEffect} from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import {store} from './src/store/store';
import {useAppDispatch} from './src/utils/hooks';
import {getIdUser} from './src/store/slice/AuthSlice';

import {navigationRef} from './navigation/RootNavigation';
import SideMenu from './navigation/SideMenu';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

const AppNavigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    SplashScreen.hide();
    dispatch(getIdUser());
    SplashScreen.show();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <SideMenu />
    </NavigationContainer>
  );
};

export default App;
