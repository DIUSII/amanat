import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import Input from '../../components/Input/Input';
import Way from './components/Way/Way';

import styles from './CreateOrderStyles';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import {useAppDispatch} from '../../utils/hooks';
import {createOrder} from '../../store/slice/OrdersSlice';
import CalculatorBox from '../../components/СalculatorBox/СalculatorBox';
import DateTimePickerInput from '../../components/DateTimePickerInput/DateTimePickerInput';
import DropDownPickerInput from '../../components/DropDownPickerInput/DropDownPickerInput';

const CreateOrder = ({navigation}) => {
  const dispatch = useAppDispatch();

  const [dateStartLoading, setDateStartLoading] = useState('');
  const [dateStartUnLoading, setDateStartUnLoading] = useState('');
  const [qtyLoaderLoading, setQtyLoaderLoading] = useState('');
  const [qtyLoaderUnLoading, setQtyLoaderUnLoading] = useState('');
  const [material, setMaterial] = useState('');
  const [typeCar, setTypeCar] = useState('');
  const [typeCarList, setTypeCarList] = useState([
    {label: 'Легковая', value: '1'},
    {label: 'Грузовая', value: '2'},
  ]);
  const [weigthCargo, setWeigthCargo] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [fromWhere, setFromWhere] = useState({text: '', coordinates: []});
  const [toWhere, setToWhere] = useState({text: '', coordinates: []});
  const [isFragile, setIsFragile] = useState(false);
  const [isColdNeed, setIsColdNeed] = useState(false);
  const [isConsolidation, setIsConsolidation] = useState(false);
  const [minimumDateUnLoading, setMinimumDateUnLoading] = useState(new Date());
  const [volume, setVolume] = useState('');

  const onPress = () => {
    const payload = {
      where_from: fromWhere.text,
      where_to: toWhere.text,
      location_where: {
        type: 'Point',
        coordinates: fromWhere.coordinates,
      },
      material,
      loading_date: dateStartLoading.value,
      unloading_date: dateStartUnLoading.value,
      loaders_load: qtyLoaderLoading,
      loader_unload: qtyLoaderUnLoading,
      is_cold_need: isColdNeed,
      is_fragile: isFragile,
      transport_kind: typeCar,
      length,
      width,
      height,
      box_volume: volume,
      is_consolidation: isConsolidation,
      weight: weigthCargo,
    };

    const res = dispatch(createOrder(payload)).then(({payload}) => {
      console.log(payload);
      if (payload) {
        navigation.navigate('Main');
      }
    });
  };

  const setDate = (date, setValue) => {
    const timeString = date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

    setValue({
      label: timeString,
      value: date,
    });
  };

  const setDatePickerStartLoading = date => {
    setMinimumDateUnLoading(date);

    if (date > dateStartUnLoading.value) {
      setDate(date, setDateStartLoading);
      setDate('', setDateStartUnLoading);
    } else {
      setDate(date, setDateStartLoading);
    }
  };

  const setDatePickerStartUnLoading = date => {
    setDate(date, setDateStartUnLoading);
  };

  const disabledButton =
    !!fromWhere.text &&
    !!toWhere.text &&
    dateStartLoading &&
    dateStartUnLoading &&
    typeCar &&
    weigthCargo &&
    ((width && height && length) ||
    volume);
  console.log()

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.subTitle}>Произвольная доставка</Text>
        <Way
          fromWhere={fromWhere}
          toWhere={toWhere}
          setFromWhere={setFromWhere}
          setToWhere={setToWhere}
        />
        <View style={{position: 'relative', zIndex: 1}}>
          <DateTimePickerInput
            value={dateStartLoading}
            mode={'datetime'}
            setValue={setDatePickerStartLoading}
            minimumDate={new Date()}
            placeholder={'Дата и время начала погрузки'}
          />
          <DateTimePickerInput
            mode={'datetime'}
            value={dateStartUnLoading}
            setValue={setDatePickerStartUnLoading}
            minimumDate={minimumDateUnLoading}
            placeholder={'Дата и время начала разгрузки'}
          />
          <Input
            value={qtyLoaderLoading}
            setValue={setQtyLoaderLoading}
            keyboardType={'numeric'}
            placeholder={'Количество грузчиков на погрузке'}
          />
          <Input
            value={qtyLoaderUnLoading}
            setValue={setQtyLoaderUnLoading}
            keyboardType={'numeric'}
            placeholder={'Количество грузчиков на разгрузке'}
          />
          <Input
            setValue={setMaterial}
            value={material}
            placeholder={'Материал'}
          />
          <DropDownPickerInput
            value={typeCar}
            setValue={setTypeCar}
            items={typeCarList}
            setItems={setTypeCarList}
            placeholder={'Вид транспорта *'}
            style={{zIndex: 2}}
          />
          <Input
            value={weigthCargo}
            setValue={setWeigthCargo}
            keyboardType={'numeric'}
            placeholder={'Вес груза (кг) *'}
          />
          <View style={styles.row}>
            <Input
              value={length}
              setValue={setLength}
              placeholder={'Д. (см)'}
              keyboardType={'numeric'}
              style={{marginRight: 10}}
            />
            <Input
              value={width}
              setValue={setWidth}
              placeholder={'Ш. (см)'}
              keyboardType={'numeric'}
              style={{marginRight: 10}}
            />
            <Input
              value={height}
              setValue={setHeight}
              placeholder={'В. (см)'}
              keyboardType={'numeric'}
            />
          </View>
          <CalculatorBox volume={volume} setVolume={setVolume} />
          <Checkbox
            title={'Хрупкий груз'}
            isSelected={isFragile}
            setSelection={setIsFragile}
          />
          <Checkbox
            title={'Нужна холодильная камера'}
            isSelected={isColdNeed}
            setSelection={setIsColdNeed}
          />
          <Checkbox
            title={'Консолидация груза'}
            isSelected={isConsolidation}
            setSelection={setIsConsolidation}
          />
          <Button disabled={!disabledButton} onPress={onPress}>
            Заказать
          </Button>
          <Text style={styles.tip}>
            Вы можете отменить заказ бесплатно в течение 60 минут после того,
            как водитель будет найден, но не позже, чем начнется погрузка
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateOrder;
