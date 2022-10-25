import React from 'react';
import {View, Text} from 'react-native';

import styles from './TitleStyle';

const Title = ({children}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

export default Title;
