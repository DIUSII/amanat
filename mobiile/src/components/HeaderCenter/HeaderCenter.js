import React from 'react';
import {Text, View} from 'react-native';

import styles from './HeaderCenterStyles';

const HeaderCenter = () => {
  return (
    <View>
      <Text style={styles.text}>Главная</Text>
    </View>
  );
};

export default HeaderCenter;
