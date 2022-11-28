import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CameraModal from '../../components/Camera/Camera';

import styles from './RegisterDriverStyles';
import CalculatorBox from '../../components/СalculatorBox/СalculatorBox';

const RegisterDriver = ({navigation}) => {
  const [bitchDay, setBitchDay] = useState('');
  const [placeOfResidence, setPlaceOfResidence] = useState('');
  const [minWeight, setMinWeight] = useState('');
  const [maxWeight, setMaxWeight] = useState('');
  const [maxVolume, setMaxVolume] = useState('');
  const [minVolume, setMinVolume] = useState('');
  const [typeCar, setTypeCar] = useState('');
  const [cargoCategories, setCargoCategories] = useState('');
  const [bodyLength, setBodyLength] = useState('');
  const [bodyWidth, setBodyWidth] = useState('');
  const [bodyHeight, setBodyHeight] = useState('');

  const onPress = () => {
    navigation.navigate('Main');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Title style={{marginBottom: 36}}>Анкета</Title>
        <Text style={styles.subTitle}>Личная информация</Text>
        <Input
          value={bitchDay}
          setValue={setBitchDay}
          placeholder={'Дата рождения'}
        />
        <Input
          value={placeOfResidence}
          setValue={setPlaceOfResidence}
          placeholder={'Место жительства'}
          style={{marginBottom: 36}}
        />
        <Text style={styles.subTitle}>Грузовая информация</Text>
        <View style={styles.row}>
          <Input
            value={minWeight}
            setValue={setMinWeight}
            placeholder={'Мин. вес (кг)'}
            style={{marginRight: 20}}
          />
          <Input
            value={maxWeight}
            setValue={setMaxWeight}
            placeholder={'Макс. вес (кг)'}
          />
        </View>
        <View style={styles.row}>
          <Input
            value={minVolume}
            setValue={setMinVolume}
            placeholder={'Мин. объем (м²)'}
            style={{marginRight: 20}}
          />
          <Input
            value={maxVolume}
            setValue={setMaxVolume}
            placeholder={'Макс объем (м²)'}
          />
        </View>
        <Input
          value={typeCar}
          setValue={setTypeCar}
          placeholder={'Тип машины'}
        />
        <Input
          value={cargoCategories}
          setValue={setCargoCategories}
          placeholder={'Категории грузов'}
          style={{marginBottom: 36}}
        />
        <Text style={styles.subTitle}>Размер кузова</Text>
        <View style={styles.row}>
          <Input
            value={bodyLength}
            setValue={setBodyLength}
            placeholder={'Д. (м))'}
            style={{marginRight: 20}}
          />
          <Input
            value={bodyWidth}
            setValue={setBodyWidth}
            placeholder={'Ш. (м)'}
            style={{marginRight: 20}}
          />
          <Input
            value={bodyHeight}
            setValue={setBodyHeight}
            placeholder={'В. (м)'}
          />
        </View>
        <CalculatorBox />
        <Text style={styles.subTitle}>Документы</Text>
        <CameraModal text={'Фото прав (главная сторона)'} />
        <CameraModal text={'Фото прав (обратная сторона)'} />
        <CameraModal text={'Удостоверение личности'} />
        <CameraModal text={'Технический паспорт'} />
        <CameraModal text={'Селфи'} />
        <Button onPress={onPress}>Подтвердить</Button>
      </View>
    </ScrollView>
  );
};

export default RegisterDriver;
