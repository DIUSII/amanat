import React from 'react';
import {View, Text} from 'react-native';

import styles from './TitleStyle';

const Title = ({children, style}) => {
  return (
    <View style={[styles.titleContainer, style]}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

export default Title;
