import React, {useEffect, useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import Clock from '../../../../images/svg/clock.svg';

import styles from './TimerModalStyles';

const TimerModal = ({visible, setVisible}) => {
  const [timeSearch, setTimeSearch] = useState('0.00');

  useEffect(() => {
    let interval;

    if (visible) {
      interval = setInterval(() => {
        setTimeSearch(innerTime => (+innerTime + 0.01).toFixed(2));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      setTimeSearch('0.00');
    }
  }, [visible]);

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}>
      <TouchableOpacity onPress={() => setVisible(false)} style={{flex: 1}}>
        <BlurView blurType="dark" blurAmount={1} style={styles.background} />
        <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
          <Clock style={{marginBottom: 32}} />
          <Text style={styles.title}>Ожидание оплаты</Text>
          <Text style={styles.subTitle}>
            Ожидаем оплаты со стороны заказчика
          </Text>
          <Text style={styles.timer}>{timeSearch}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default TimerModal;
