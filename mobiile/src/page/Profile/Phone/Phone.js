import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import * as RootNavigation from '../../../../navigation/RootNavigation';

import styles from './PhoneStyles';

const Phone = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => RootNavigation.navigate('ChangePhone')}>
      <Shadow
        distance={2}
        startColor={'#DFDFE650'}
        endColor={'#DFDFE650'}
        style={{width: '100%'}}
        offset={[0, 3]}>
        <View style={styles.content}>
          <Text style={styles.phoneLabel}>Номер телефона</Text>
          <View style={styles.row}>
            <Text style={styles.phone}>+7 (727) 545 49 99</Text>
          </View>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default Phone;
