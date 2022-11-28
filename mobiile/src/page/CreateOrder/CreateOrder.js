import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import Input from '../../components/Input/Input';
import Way from './components/Way/Way';

import styles from './CreateOrderStyles';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';

const CreateOrder = () => {
  const [dateStartLoading, setDateStartLoading] = useState('');
  const [dateStartUnLoading, setDateStartUnLoading] = useState('');
  const [qtyLoaderLoading, setQtyLoaderLoading] = useState('');
  const [qtyLoaderUnLoading, setQtyLoaderUnLoading] = useState('');
  const [material, setMaterial] = useState('');
  const [typeCar, setTypeCar] = useState('');
  const [weigthCargo, setWeigthCargo] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.subTitle}>Произвольная доставка</Text>
        <Way />
        <Input
          value={dateStartLoading}
          setValue={setDateStartLoading}
          placeholder={'Дата и время начала погрузки'}
        />
        <Input
          value={dateStartUnLoading}
          setValue={setDateStartUnLoading}
          placeholder={'Дата и время начала разгрузки'}
        />
        <Input
          value={qtyLoaderLoading}
          setValue={setQtyLoaderLoading}
          placeholder={'Количество грузчиков на погрузке'}
        />
        <Input
          value={qtyLoaderUnLoading}
          setValue={setQtyLoaderUnLoading}
          placeholder={'Количество грузчиков на разгрузке'}
        />
        <Input
          setValue={setMaterial}
          value={material}
          placeholder={'Материал'}
        />
        <Input
          value={typeCar}
          setValue={setTypeCar}
          placeholder={'Вид транспорта *'}
        />
        <Input
          value={weigthCargo}
          setValue={setWeigthCargo}
          placeholder={'Вес груза (кг) *'}
        />
        <View style={styles.row}>
          <Input
            value={length}
            setValue={setLength}
            placeholder={'Д. (см)'}
            style={{marginRight: 10}}
          />
          <Input
            value={width}
            setValue={setWidth}
            placeholder={'Ш. (см)'}
            style={{marginRight: 10}}
          />
          <Input value={height} setValue={setHeight} placeholder={'В. (см)'} />
        </View>
        <Button>Калькулятор коробок</Button>
        <Checkbox title={'Хрупкий груз'} />
        <Checkbox title={'Нужна холодильная камера'} />
        <Checkbox title={'Консолидация груза'} />
        <Button>Заказать</Button>
        <Text style={styles.tip}>
          Вы можете отменить заказ бесплатно в течение 60 минут после того, как
          водитель будет найден, но не позже, чем начнется погрузка
        </Text>
      </View>
    </ScrollView>
  );
};

export default CreateOrder;
