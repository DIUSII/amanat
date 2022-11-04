import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import RadioButton from '../../components/RadioButton/RadioButton';
import {Shadow} from 'react-native-shadow-2';

import styles from './TypeDriverStyles';
import Button from '../../components/Button/Button';

const TypeDriver = () => {
  const [typeDriver, setTypeDriver] = useState([
    {
      id: 0,
      label: 'Газель крытая',
      selected: true,
    },
    {
      id: 1,
      label: 'Газель',
      selected: false,
    },
    {
      id: 2,
      label: 'Газель',
      selected: false,
    },
  ]);

  const handleSelected = index => {
    const type = typeDriver.find(type => type.id === index);
    const changeTypeDriver = typeDriver.map(type => {
      return {...type, selected: false};
    });
    setTypeDriver([
      ...changeTypeDriver.slice(0, index),
      {...type, selected: true},
      ...changeTypeDriver.slice(index + 1),
    ]);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Выберите новый вид транспорта</Text>
          {typeDriver.map((card, index) => (
            <Shadow
              key={card.id}
              distance={2}
              startColor={'#DFDFE650'}
              endColor={'#DFDFE650'}
              style={{width: '100%', marginBottom: 20}}
              offset={[0, 3]}>
              <TouchableOpacity
                style={styles.content}
                onPress={() => handleSelected(index)}>
                <Text style={styles.label}>{card.label}</Text>
                <View style={styles.row}>
                  <RadioButton selected={card.selected} />
                </View>
              </TouchableOpacity>
            </Shadow>
          ))}
        </View>
        <Button>Подтвердить</Button>
      </View>
    </ScrollView>
  );
};

export default TypeDriver;
