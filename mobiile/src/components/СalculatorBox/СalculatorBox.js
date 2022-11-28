import React, {useState} from 'react';
import {Text, View} from 'react-native';

import styles from './СalculatorBoxStyles';
import Button from '../Button/Button';
import CalculatorModal from './СalculatorModal/СalculatorModal';

const CalculatorBox = () => {
  const [volume, setVolume] = useState(0);
  const [visibleModal, setVisibleModal] = useState(0);
  return (
    <View style={styles.container}>
      {volume ? (
        <View style={styles.volumeContainer}>
          <Text style={styles.volumeLabel}>Объем</Text>
          <Text style={styles.volume}>{volume} м3</Text>
        </View>
      ) : null}
      <Button onPress={() => setVisibleModal(true)}>Калькулятор коробок</Button>
      <CalculatorModal
        visible={visibleModal}
        setVisible={setVisibleModal}
        setVolume={setVolume}
      />
    </View>
  );
};

export default CalculatorBox;
