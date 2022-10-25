import React from 'react';
import {Text, View} from 'react-native';
import MaskInput from 'react-native-mask-input';
import {Shadow} from 'react-native-shadow-2';

import styles from './InputForPhoneStyles';

const InputForPhone = props => {
  const [focus, setFocus] = React.useState(false);

  return (
    <Shadow
      distance={1}
      startColor={'#DFDFE650'}
      endColor={'#DFDFE650'}
      style={{width: '100%'}}
      offset={[0, 2]}>
      <View style={styles.container}>
        <Text style={styles.seven}>+7</Text>
        <MaskInput
          placeholder={focus ? '(xxx) xxx xx xx' : 'Телефон'}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          keyboardType={'number-pad'}
          value={props.value}
          style={{
            paddingTop: 0,
            paddingBottom: 0,
            color: '#ABA9B9',
            fontSize: 17,
          }}
          placeholderTextColor={'#ABA9B9'}
          onChangeText={(masked, unmasked) => {
            props.setValue(unmasked);
          }}
          mask={[
            '(',
            /\d/,
            /\d/,
            /\d/,
            ') ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
          ]}
        />
      </View>
    </Shadow>
  );
};

export default InputForPhone;
