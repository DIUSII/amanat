import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import Input from '../../components/Input/Input';

import styles from './AddCardStyles';
import InputMask from '../../components/InputMask/InputMask';
import Button from '../../components/Button/Button';
import {addCard} from '../../store/slice/MainSlice';
import {useAppDispatch} from '../../utils/hooks';
import car from '../../images/svgChanges/Car';

const AddCard = () => {
  const dispatch = useAppDispatch();
  const [card, setCard] = useState('');
  const [code, setCode] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  const disabledButton =
    card.length !== 16 || code.length !== 3 || date.length !== 5; // date === 5 потому что значение вместо с масской

  const addCardHandle = () => {
    const payload = {
      number: card,
      date_valid: date,
      cvc: code,
    };

    setLoading(true);
    dispatch(addCard(payload)).then(() => {
      setLoading(false);
    });
  };

  return (
    <ScrollView style={styles.flex}>
      <View style={styles.container}>
        <InputMask
          keyboardType={'numeric'}
          value={card}
          mask={[
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          setValue={setCard}
          placeholder={'Номер карты'}
        />
        <View style={styles.row}>
          <InputMask
            keyboardType={'numeric'}
            value={code}
            setValue={setCode}
            mask={[/\d/, /\d/, /\d/]}
            placeholder={'CVC'}
            style={{marginRight: 16}}
          />
          <InputMask
            keyboardType={'numeric'}
            value={date}
            masked
            mask={[/\d/, /\d/, '/', /\d/, /\d/]}
            setValue={setDate}
            placeholder={'Срок действия'}
          />
        </View>
        <Button
          loading={loading}
          onPress={addCardHandle}
          disabled={disabledButton}>
          Добавить карту
        </Button>
      </View>
    </ScrollView>
  );
};

export default AddCard;
