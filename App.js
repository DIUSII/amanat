import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import YaMap from 'react-native-yamap';

import AppNavigation from './navigation/AppNavigation';

YaMap.init('02342126-49de-4caf-835a-708529d9f4f1');

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
