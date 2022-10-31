import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {navigationRef} from './navigation/RootNavigation';
import SideMenu from './navigation/SideMenu';

const App: () => Node = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SideMenu />
    </NavigationContainer>
  );
};

export default App;
