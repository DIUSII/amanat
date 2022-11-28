import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {Text, View} from 'react-native';

import styles from './PaymentFailedStyles';

const PaymentFailed = () => {
  return (
    <View style={styles.container}>
      <Shadow
        distance={2}
        startColor={'#DFDFE650'}
        endColor={'#DFDFE650'}
        style={{width: '100%'}}
        offset={[0, 3]}>
        <View style={styles.content}>
          <Text style={styles.title}>Оплата не прошла</Text>
        </View>
      </Shadow>
    </View>
  );
};

export default PaymentFailed;
