import React from 'react';
import {View} from 'react-native';

import styles from './RadioButtonStyles';

const RadioButton = ({selected, style}) => {
  return (
    <View style={[styles.container, style]}>
      {selected ? <View style={styles.check} /> : null}
    </View>
  );
};

export default RadioButton;
