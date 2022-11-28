import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import RadioButton from '../../../components/RadioButton/RadioButton';
import {Shadow} from 'react-native-shadow-2';

import styles from './CardsStyles';

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 0,
      card: 'MasterCard 4788',
      selected: true,
    },
    {
      id: 1,
      card: 'MasterCard 4789',
      selected: false,
    },
  ]);

  const handleSelected = index => {
    const card = cards.find(card => card.id === index);
    const changeCards = cards.map(card => {
      return {...card, selected: false};
    });
    setCards([
      ...changeCards.slice(0, index),
      {...card, selected: true},
      ...changeCards.slice(index + 1),
    ]);
  };

  return (
    <View>
      {cards.map((card, index) => (
        <Shadow
          key={card.id}
          distance={2}
          startColor={'#DFDFE650'}
          endColor={'#DFDFE650'}
          style={{width: '100%', marginBottom: 20}}
          offset={[0, 3]}>
          <TouchableOpacity style={styles.content} onPress={() => handleSelected(index)}>
            <Text style={styles.label}>Карта {index}</Text>
            <View style={styles.row}>
              <Text style={styles.card}>{card.card}</Text>
              <RadioButton selected={card.selected} />
            </View>
          </TouchableOpacity>
        </Shadow>
      ))}
    </View>
  );
};

export default Cards;
