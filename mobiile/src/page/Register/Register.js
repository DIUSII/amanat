import React, {useEffect, useState} from 'react';
import {BackHandler, ScrollView, View} from 'react-native';

import {useAppDispatch} from '../../utils/hooks';
import {registerUserOrDriver} from '../../store/slice/AuthSlice';

import Title from '../../components/Title/Title';
import Toggle from './components/Toggle/Toggle';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Camera from '../../components/Camera/Camera';
import DropDownPickerInput from '../../components/DropDownPickerInput/DropDownPickerInput';

import styles from './RegisterStyle';
import {getUser} from '../../store/slice/MainSlice';

const RegisterStyle = ({route, navigation}) => {
  const dispatch = useAppDispatch();
  const {params} = route;

  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState('user');
  const [image, setImage] = useState('');
  const [cities, setCities] = useState([
    {label: 'Москва', value: 'moscow'},
    {label: 'Алмата', value: 'almaty'},
  ]);

  const buttonDisabled = !name || !surname || !city || !patronymic;

  const onPress = async () => {
    const payload = {
      first_name: name,
      last_name: surname,
      patronymic,
      is_driver: false,
      place_of_residence: city,
      phone: params && params.phone,
    };
    if (image) {
      payload.photo = `data:${image.type};base64,${image.base64}`;
    }

    const data = await dispatch(registerUserOrDriver(payload));

    if (data.payload) {
      if (role === 'driver') {
        navigation.navigate('RegisterDriver');
      }
      if (role === 'user') {
        await dispatch(getUser());
        navigation.navigate('Main');
      }
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => false);
  }, []);

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
          placeholder={'Отчество *'}
        />
        <DropDownPickerInput
          items={cities}
          setItems={setCities}
          value={city}
          setValue={setCity}
          placeholder={'Выберете город'}
          searchable={true}
        />
        <Camera
          text={'Загрузите ваше фото'}
          setImage={setImage}
          image={image}
        />
        <Button disabled={buttonDisabled} onPress={onPress}>
          Подтвердить
        </Button>
      </View>
    </ScrollView>
  );
};

export default RegisterStyle;
