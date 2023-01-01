import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CameraModal from '../../components/Camera/Camera';

import styles from './RegisterDriverStyles';
import CalculatorBox from '../../components/СalculatorBox/СalculatorBox';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {registerDriver, registerUserOrDriver} from '../../store/slice/AuthSlice';
import {getCargoCategories, getUser} from '../../store/slice/MainSlice';
import InputMask from '../../components/InputMask/InputMask';
import DropDownPickerInput from '../../components/DropDownPickerInput/DropDownPickerInput';
import DateTimePickerInput from '../../components/DateTimePickerInput/DateTimePickerInput';

const RegisterDriver = ({route, navigation}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.main.user);
  const categories = useAppSelector(state => state.main.cargoCategories);

  const {params} = route;
  const [bitchDay, setBitchDay] = useState('');
  const [placeOfResidence, setPlaceOfResidence] = useState('');
  const [minWeight, setMinWeight] = useState('');
  const [maxWeight, setMaxWeight] = useState('');
  const [maxVolume, setMaxVolume] = useState('');
  const [minVolume, setMinVolume] = useState('');
  const [typeCar, setTypeCar] = useState('');
  const [typeCarList, setTypeCarList] = useState([
    {label: 'Легковая', value: '1'},
    {label: 'Грузовая', value: '2'},
  ]);
  const [cargoCategories, setCargoCategories] = useState([]);
  const [cargoCategoriesList, setCargoCategoriesList] = useState([]);
  const [bodyLength, setBodyLength] = useState('');
  const [bodyWidth, setBodyWidth] = useState('');
  const [bodyHeight, setBodyHeight] = useState('');
  const [driverLicenseFront, setDriverLicenseFront] = useState('');
  const [driverLicenseBack, setDriverLicenseBack] = useState('');
  const [passport, setPassport] = useState('');
  const [techPassport, setTechPassport] = useState('');
  const [selfie, setSelfie] = useState('');
  const [boxVolume, setBoxVolume] = useState('');

  const userName = user && user.properties && user.properties.phone;
  const date = new Date();
  const maximumDate = date.setFullYear(date.getFullYear() - 18);

  const onPress = async () => {
    const payload = {
      phone: params && params.phone ? params.phone : userName,
      is_driver: true,
      place_of_residence: placeOfResidence,
      birth_date: bitchDay.value,
      car_info: {
        cargo_categories: cargoCategories,
        min_weight: minWeight,
        max_weight: maxWeight,
        min_volume: minVolume,
        max_volume: maxVolume,
        transport_kind: typeCar.value,
        length: bodyLength,
        width: bodyWidth,
        depth: bodyHeight,
        box_volume: boxVolume,
        document_photo_one: `data:${driverLicenseFront.type};base64,${driverLicenseFront.base64}`,
        document_photo_two: `data:${driverLicenseBack.type};base64,${driverLicenseBack.base64}`,
        passport_photo: `data:${passport.type};base64,${passport.base64}`,
        tech_passport_photo: `data:${techPassport.type};base64,${techPassport.base64}`,
        selfie_photo: `data:${selfie.type};base64,${selfie.base64}`,
      },
    };

    const data = await dispatch(registerDriver(payload));

    if (data) {
      await dispatch(getUser());
      navigation.navigate('Main');
    }
  };

  const setDate = date => {
    const dateSrc = date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setBitchDay({label: dateSrc.split('.').join('-'), value: date});
  };

  const disabledButton =
    !bitchDay.label ||
    !placeOfResidence ||
    !minWeight ||
    !maxWeight ||
    !minVolume ||
    !maxVolume ||
    !typeCar ||
    !cargoCategories.length ||
    !bodyLength ||
    !bodyWidth ||
    // !driverLicenseFront ||
    // !driverLicenseBack ||
    // !passport ||
    // !techPassport ||
    // !selfie ||
    !bodyHeight;

  useEffect(() => {
    dispatch(getCargoCategories());
  }, []);

  useEffect(() => {
    if (categories) {
      setCargoCategoriesList(
        categories &&
          categories.map(category => {
            return {
              label: category.title,
              value: category.id,
            };
          }),
      );
    }
  }, [categories]);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Title style={{marginBottom: 36}}>Анкета</Title>
        <Text style={styles.subTitle}>Личная информация</Text>
        <DateTimePickerInput
          value={bitchDay}
          setValue={setDate}
          minimumDate={new Date(1900, 0, 0, 0)}
          maximumDate={maximumDate}
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
            keyboardType={'number-pad'}
            placeholder={'Мин. вес (кг)'}
            style={{marginRight: 20}}
          />
          <Input
            value={maxWeight}
            setValue={setMaxWeight}
            keyboardType={'number-pad'}
            placeholder={'Макс. вес (кг)'}
          />
        </View>
        <View style={styles.row}>
          <Input
            value={minVolume}
            setValue={setMinVolume}
            keyboardType={'number-pad'}
            placeholder={'Мин. объем (м²)'}
            style={{marginRight: 20}}
          />
          <Input
            value={maxVolume}
            setValue={setMaxVolume}
            keyboardType={'number-pad'}
            placeholder={'Макс объем (м²)'}
          />
        </View>
        <DropDownPickerInput
          value={typeCar}
          setValue={setTypeCar}
          items={typeCarList}
          setItems={setTypeCarList}
          placeholder={'Тип машины'}
          style={{zIndex: 2}}
        />
        <DropDownPickerInput
          value={cargoCategories}
          setValue={setCargoCategories}
          items={cargoCategoriesList}
          setItems={setCargoCategoriesList}
          multiple={true}
          placeholder={'Категории грузов'}
          style={{marginBottom: 36}}
        />
        <Text style={styles.subTitle}>Размер кузова</Text>
        <View style={styles.row}>
          <Input
            value={bodyLength}
            setValue={setBodyLength}
            placeholder={'Д. (м)'}
            keyboardType={'number-pad'}
            style={{marginRight: 20}}
          />
          <Input
            value={bodyWidth}
            setValue={setBodyWidth}
            placeholder={'Ш. (м)'}
            keyboardType={'number-pad'}
            style={{marginRight: 20}}
          />
          <Input
            value={bodyHeight}
            setValue={setBodyHeight}
            keyboardType={'number-pad'}
            placeholder={'В. (м)'}
          />
        </View>
        <CalculatorBox volume={boxVolume} setVolume={setBoxVolume} />
        <Text style={styles.subTitle}>Документы</Text>
        <CameraModal
          image={driverLicenseFront}
          setImage={setDriverLicenseFront}
          text={'Фото прав (главная сторона)'}
        />
        <CameraModal
          image={driverLicenseBack}
          setImage={setDriverLicenseBack}
          text={'Фото прав (обратная сторона)'}
        />
        <CameraModal
          image={passport}
          setImage={setPassport}
          text={'Удостоверение личности'}
        />
        <CameraModal
          image={techPassport}
          setImage={setTechPassport}
          text={'Технический паспорт'}
        />
        <CameraModal image={selfie} setImage={setSelfie} text={'Селфи'} />
        <Button disabled={disabledButton} onPress={onPress}>
          Подтвердить
        </Button>
      </View>
    </ScrollView>
  );
};

export default RegisterDriver;
