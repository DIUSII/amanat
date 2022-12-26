import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../../../components/Button/Button';

import MapPin from '../../../../images/svg/mapPin.svg';
import LocationUser from '../../../../images/svg/locationUser.svg';

import styles from './BottomSheetStyles';
import * as RootNavigation from '../../../../../navigation/RootNavigation';
import {useAppDispatch, useAppSelector} from '../../../../utils/hooks';
import {deleteOrder, getOrder} from '../../../../store/slice/OrdersSlice';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BottomSheet = ({focusForPin, loading, address}) => {
  const dispatch = useAppDispatch();
  const order = useAppSelector(state => state.order.order);

  const user = useAppSelector(state => state.main.user);

  const [startSearch, setStartSearch] = useState(false);
  const [timeSearch, setTimeSearch] = useState(1);

  const onPressUser = () => {
    RootNavigation.navigate('Categories', {goBack: 'Categories'});
  };

  const onRejectSearch = () => {
    dispatch(deleteOrder()).then(() => {
      setStartSearch(false);
      setTimeSearch(1);
    });
  };

  const onPressDriver = () => {
    RootNavigation.navigate('Orders', {goBack: 'Main'});
  };

  useEffect(() => {
    if (startSearch) {
      const timer = setInterval(() => {
        setTimeSearch(timeInner => Math.floor((timeInner + 1) * 100) / 100);
      }, 1000);

      if (timeSearch.toString().includes('59')) {
        setTimeSearch(timeInner => timeInner + 41);
      }
      return () => clearInterval(timer);
    }
  }, [timeSearch, startSearch]);

  useEffect(() => {
    dispatch(getOrder()).then(({payload}) => {
      if (
        payload &&
        payload.properties &&
        payload.properties.status === 'created'
      ) {
        setStartSearch(true);
      }
    });

    const checkDriverFind = setInterval(() => dispatch(getOrder()), 10 * 1000);

    if (order && order.properties && order.properties.status === 'created') {
      setStartSearch(true);
    } else {
      clearInterval(checkDriverFind);
      setStartSearch(false);
    }

    return () => clearInterval(checkDriverFind);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      {startSearch ? (
        <View>
          <Text style={styles.textSearchDriver}>Поиск водителя</Text>
          <Text style={styles.timer}>{(timeSearch / 100).toFixed(2)}</Text>
        </View>
      ) : (
        <View style={styles.rowLocation}>
          <View style={styles.row}>
            <View>
              <MapPin style={styles.marginRight} />
            </View>
            <Text style={styles.text}>{loading ? '...Loading' : address}</Text>
          </View>
          <TouchableOpacity onPress={focusForPin}>
            <LocationUser />
          </TouchableOpacity>
        </View>
      )}
      {user.properties.is_driver ? (
        <Button onPress={onPressDriver}>Заявок доступно</Button>
      ) : !startSearch ? (
        <Button onPress={onPressUser}>Создать заказ</Button>
      ) : (
        <Button onPress={onRejectSearch}>Отменить</Button>
      )}
    </View>
  );
};

export default BottomSheet;
