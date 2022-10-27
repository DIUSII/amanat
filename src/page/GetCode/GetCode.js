import React, {useEffect, useState} from 'react';
import {Keyboard, Text, View, TouchableOpacity} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Shadow} from 'react-native-shadow-2';

import Title from '../../components/Title/Title';
import Timer from '../../components/InputForPhone/components/Timer/Timer';

import Circle from '../../images/svg/circle.svg';

import styles from './GetCodeStyle';

const CELL_COUNT = 4;

const GetCode = ({route, navigation}) => {
  const {phone} = route.params;

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [inlineStyleChangeNumber, setInlineStylesChangeNumber] = useState({
    bottom: 46,
  });
  const [value, setValue] = React.useState('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setInlineStylesChangeNumber({bottom: 36});
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setInlineStylesChangeNumber({bottom: 46});
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (value.length === 4) {
      navigation.navigate('Register');
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <Title>Подтверждение номера</Title>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          Введите код, отправленный на +7{phone}
        </Text>
      </View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        rootStyle={styles.codeFieldRoot}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text onLayout={getCellOnLayoutHandler(index)} key={index}>
            <Shadow
              offset={[0, 4]}
              distance={1}
              startColor={'#DFDFE650'}
              endColor={'#DFDFE650'}>
              <View style={styles.cellContainer}>
                <Text style={styles.cell}>
                  {symbol || (isFocused ? <Cursor /> : <Circle />)}
                </Text>
              </View>
            </Shadow>
          </Text>
        )}
      />
      <Timer />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.changeNumberContainer, inlineStyleChangeNumber]}>
        <Text style={styles.changeNumber}>Изменить номер телефона</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetCode;
