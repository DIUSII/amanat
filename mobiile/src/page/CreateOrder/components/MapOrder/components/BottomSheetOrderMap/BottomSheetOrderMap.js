import React, {useState} from 'react';
import {Text, View} from 'react-native';

import MapPin from '../../../../../../images/svg/mapPin.svg';
import LocationUser from '../../../../../../images/svg/locationUser.svg';

import styles from './BottomSheetOrderMapStyles';
import Button from '../../../../../../components/Button/Button';

const BottomSheetOrderMap = ({loading, address, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowLocation}>
        <View style={styles.row}>
          <View>
            <MapPin style={styles.marginRight} />
          </View>
          <Text style={styles.text}>{loading ? '...Loading' : address}</Text>
        </View>
      </View>
      <Button onPress={onPress}>Выбрать адресс</Button>
    </View>
  );
};

export default BottomSheetOrderMap;
