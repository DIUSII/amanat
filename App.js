import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {navigationRef} from './navigation/RootNavigation';
import SideMenu from './navigation/SideMenu';
import {StatusBar} from 'react-native';

const App: () => Node = () => {
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
