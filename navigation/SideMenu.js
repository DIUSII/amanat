import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent/CustomDrawerContent';
import AppNavigation from './AppNavigation';

const Drawer = createDrawerNavigator();

const SideMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor: 'transparent', width: '90%'},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="AppNavigation"
        component={AppNavigation}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default SideMenu;
