import React, {useState} from 'react';
import {ScrollView, Switch, View} from 'react-native';

import Title from '../../components/Title/Title';
import Toggle from './components/Toggle/Toggle';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import styles from './RegisterStyle';
import CameraModal from '../../components/Camera/Camera';

const RegisterStyle = ({navigation}) => {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState('user');

  const onPress = () => {
    if (role === 'user') {
      navigation.navigate('Main');
    } else if (role === 'driver') {
      navigation.navigate('RegisterDriver');
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Title style={{marginBottom: 40}}>Регистрация</Title>
        <Toggle role={role} setRole={setRole} style={{marginBottom: 24}} />
        <Input
          value={surname}
          setValue={setSurname}
          placeholder={'Фамилия *'}
        />
        <Input value={name} setValue={setName} placeholder={'Имя *'} />
        <Input
          value={patronymic}
          setValue={setPatronymic}
          placeholder={'Отчество'}
        />
        <Input value={city} setValue={setCity} placeholder={'Город *'} />
        <CameraModal text={'Загрузите ваше фото'} />
        <Button onPress={onPress}>Подтвердить</Button>
      </View>
    </ScrollView>
  );
};

export default RegisterStyle;
