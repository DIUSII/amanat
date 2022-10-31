import React from 'react';
import {TouchableOpacity} from 'react-native';

import Burger from '../../images/svg/burger.svg';
import ArrowLeftInHeader from '../../images/svg/arrowLeftInHeader.svg';

import * as RootNavigation from '../../../navigation/RootNavigation';

const HeaderLeft = ({type}) => {
  const onPress = () => {
    type === 'menu' ? RootNavigation.openDrawer() : RootNavigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {type === 'menu' ? <Burger /> : <ArrowLeftInHeader />}
    </TouchableOpacity>
  );
};

export default HeaderLeft;
