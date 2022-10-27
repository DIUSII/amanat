import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './InputStyles';
import {Shadow} from 'react-native-shadow-2';

const Input = ({value, setValue, placeholder, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Shadow
        distance={2}
        startColor={'#DFDFE650'}
        endColor={'#DFDFE650'}
        style={{width: '100%'}}
        offset={[0, 3]}>
        <View style={styles.containerInput}>
          <TextInput
            value={value}
            onChange={setValue}
            placeholder={placeholder}
            style={styles.input}
            placeholderTextColor={'#ABA9B9'}
          />
        </View>
      </Shadow>
    </View>
  );
};

export default Input;
