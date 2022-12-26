import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import styles from './ChangePhoneStyles';
import InputForPhone from '../../components/InputForPhone/InputForPhone';
import {useAppDispatch} from '../../utils/hooks';
import {updateUser} from '../../store/slice/MainSlice';

const ChangePhone = () => {
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (phone.length === 10) {
      dispatch(
        updateUser({
          phone: `7${phone}`,
        }),
      );
    }
  }, [phone]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введите ваш новый номер телефона</Text>
      <InputForPhone value={phone} setValue={setPhone} />
    </View>
  );
};

export default ChangePhone;
