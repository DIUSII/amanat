import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../../../components/Button/Button';

import MapPin from '../../../../images/svg/mapPin.svg';
import LocationUser from '../../../../images/svg/locationUser.svg';

import styles from './BottomSheetStyles';
import * as RootNavigation from '../../../../../navigation/RootNavigation';

const BottomSheet = ({
  navigation,
  createOrder,
  rejectOrder,
  loading,
  address,
}) => {
  const [startSearch, setStartSearch] = useState(false);
  const [timeSearch, setTimeSearch] = useState(0.01);

  const onPress = () => {
    // let interval = setInterval(() => {
    //   setTimeSearch(innerTime => (+innerTime + 0.01).toFixed(2));
    //   if (startSearch) {
    //     clearInterval(interval);
    //   }
    // }, 1000);
    //
    // if (!startSearch) {
    //   createOrder();
    //   setStartSearch(true);
    // } else {
    //   rejectOrder();
    //   setTimeSearch(0.01);
    //   clearInterval(interval);
    //   setStartSearch(false);
    // }
    RootNavigation.navigate('Categories', {goBack: 'Categories'});
  };

  return (
    <View style={styles.container}>
      {startSearch ? (
        <View>
          <Text style={styles.textSearchDriver}>Поиск водителя</Text>
          <Text style={styles.timer}>{timeSearch}</Text>
        </View>
      ) : (
        <View style={styles.rowLocation}>
          <View style={styles.row}>
            <View>
              <MapPin style={styles.marginRight} />
            </View>
            <Text style={styles.text}>{loading ? '...Loading' : address}</Text>
          </View>
          <LocationUser />
        </View>
      )}
      <Button onPress={onPress}>
        {!startSearch ? 'Создать заказ' : 'Отменить'}
      </Button>
    </View>
  );
};

export default BottomSheet;
