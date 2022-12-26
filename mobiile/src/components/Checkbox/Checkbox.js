import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './CheckboxStyles';

const Checkbox = ({title, isSelected, setSelection}) => {
  return (
    <TouchableOpacity
      onPress={() => setSelection(!isSelected)}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <CheckBox
        tintColors={{true: '#392D92', false: '#392D92'}}
        style={styles.checkbox}
        value={isSelected}
        onValueChange={setSelection}
      />
    </TouchableOpacity>
  );
};

export default Checkbox;
