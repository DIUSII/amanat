import React from 'react';
import {View} from 'react-native';
import MaskInput from 'react-native-mask-input';
import {Shadow} from 'react-native-shadow-2';

import styles from './InputMaskStyles';

const InputMask = props => {
  return (
    <View style={[styles.container, props.style]}>
      <Shadow
        distance={1}
        startColor={'#DFDFE650'}
        endColor={'#DFDFE650'}
        style={{width: '100%'}}
        offset={[0, 2]}>
        <View style={styles.shadow}>
          <MaskInput
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            value={props.value}
            style={styles.maskInput}
            placeholderTextColor={'#ABA9B9'}
            onChangeText={(masked, unmasked) => {
              props.masked ? props.setValue(masked) : props.setValue(unmasked);
            }}
            mask={props.mask}
          />
        </View>
      </Shadow>
    </View>
  );
};

export default InputMask;
