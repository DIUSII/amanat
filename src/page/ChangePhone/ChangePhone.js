import React, {useState} from 'react';
import {Text, View} from 'react-native';

import styles from './ChangePhoneStyles';
import InputForPhone from '../../components/InputForPhone/InputForPhone';

const ChangePhone = () => {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введите ваш новый номер телефона</Text>
      <InputForPhone value={phone} setValue={setPhone} />
    </View>
  );
};

export default ChangePhone;
