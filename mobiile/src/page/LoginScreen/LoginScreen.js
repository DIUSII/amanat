import React, {useEffect, useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Title from '../../components/Title/Title';
import InputForPhone from '../../components/InputForPhone/InputForPhone';

import styles from './LoginScreenStyles';

const LoginScreen = ({navigation}) => {
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

  useEffect(() => {
    if (phone.length === 10) {
      navigation.navigate('GetCode', {phone});
      setPhone('');
    }
  }, [phone]);

  return (
    <View style={styles.container}>
      <Title>Телефон</Title>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          Введите ваш номер телефона, чтобы&nbsp;войти или зарегистрироваться
        </Text>
      </View>
      <InputForPhone value={phone} setValue={setPhone} />
      <Text style={[styles.rules, inlineStyleRules]}>
        Регистрируясь, вы принимаете{' '}
        <Text style={styles.underline}>условия использования</Text> и{' '}
        <Text style={styles.underline}>политику конфиденциальности.</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
