import React, {useEffect, useState} from 'react';
import {View, Text, Keyboard} from 'react-native';

import {sendSms} from '../../store/slice/AuthSlice';
import {useAppDispatch} from '../../utils/hooks';

import Title from '../../components/Title/Title';
import InputForPhone from '../../components/InputForPhone/InputForPhone';

import styles from './LoginScreenStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
  const dispatch = useAppDispatch();

  const [phone, setPhone] = React.useState('');
  const [inlineStyleRules, setInlineStylesRules] = useState({
    bottom: 46,
  });

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setInlineStylesRules({bottom: 36});
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setInlineStylesRules({bottom: 46});
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const sendSmsHandle = () => {
    if (phone.length === 10) {
      dispatch(sendSms({phone: `7${phone}`})).then(() => {
        navigation.navigate('GetCode', {phone: `7${phone}`});
      });
    }
  };

  useEffect(() => {
    sendSmsHandle();
  }, [phone]);

  return (
    <View style={styles.container}>
      <Title>Телефон</Title>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          Введите ваш номер телефона, чтобы&nbsp;войти или зарегистрироваться
        </Text>
      </View>
      <InputForPhone value={phone} setValue={setPhone} onBlur={sendSmsHandle} />
      <Text style={[styles.rules, inlineStyleRules]}>
        Регистрируясь, вы принимаете{' '}
        <Text
          onPress={() => navigation.navigate('Rules')}
          style={styles.underline}>
          условия использования
        </Text>{' '}
        и{' '}
        <Text
          onPress={() => navigation.navigate('Pers')}
          style={styles.underline}>
          политику конфиденциальности.
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
