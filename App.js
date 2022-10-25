import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './navigation/AppNavigation';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
