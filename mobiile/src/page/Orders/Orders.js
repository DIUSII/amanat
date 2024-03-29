import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';

import ArrowFilter from '../../images/svg/arrowsFilter.svg';

import styles from './OrdersStyles';
import Order from './Order/Order';
import PaymentFailed from './PaymentFailed/PaymentFailed';
import {getOrders} from '../../store/slice/OrdersSlice';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';

const Orders = () => {
  const dispatch = useAppDispatch();

  const orders = useAppSelector(state => state.order.orders);
  console.log(orders);
  console.log(orders);
  // const orders = [
  //   {
  //     id: 0,
  //     date: '28 июля, 15:30',
  //     address: 'ул. Дуйсенова, д. 3',
  //     startLoaded: 'Начало погрузки – 16:30',
  //     tags: [
  //       {
  //         id: 0,
  //         title: '500 м',
  //       },
  //       {
  //         id: 1,
  //         title: 'Строительные грузы',
  //       },
  //       {
  //         id: 2,
  //         title: 'Консолидация',
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     date: '28 июля, 15:30',
  //     address: 'ул. Дуйсенова, д. 3',
  //     startLoaded: 'Начало погрузки – 16:30',
  //     tags: [
  //       {
  //         id: 0,
  //         title: '500 м',
  //       },
  //       {
  //         id: 1,
  //         title: 'Строительные грузы',
  //       },
  //       {
  //         id: 2,
  //         title: 'Консолидация',
  //       },
  //     ],
  //   },
  // ];

  useEffect(() => {
    dispatch(getOrders());
  }, [])

  return (
    <ScrollView style={styles.scrollView}>
      {/*<PaymentFailed />*/}
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <ArrowFilter style={{marginRight: 12}} />
          <Text style={styles.labelFilter}>Сначала близкие</Text>
        </View>
        {orders && orders.map(order => (
          <Order key={order.id} order={order} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Orders;
