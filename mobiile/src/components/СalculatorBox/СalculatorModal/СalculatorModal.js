import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import Tag from './Tag/Tag';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

import Plus from '../../../images/svg/plus.svg';
import Clear from '../../../images/svg/clearCalculatorModal.svg';

import styles from './СalculatorModalStyles';

const CalculatorModal = ({visible, setVisible, setVolume}) => {
  const [volumeModal, setVolumeModal] = useState();
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [qty, setQty] = useState();
  const [tags, setTags] = useState([]);

  const addTag = () => {
    const lastId = (tags.slice(-1)[0] && tags.slice(-1)[0].id + 1) || 0;
    const formulaVolume = +width * +length * +height * +qty;
    console.log(+width);
    console.log(formulaVolume);
    setVolumeModal(formulaVolume);
    setTags(innerTags => [...innerTags, {id: lastId, name: formulaVolume}]);
    console.log(tags);
  };

  Keyboard.dismiss();

  return (
    <Modal
      transparent={true}
      visible={true}
      onRequestClose={() => {
        setVisible(false);
      }}>
      <TouchableOpacity
        onPress={() => {
          setVisible(false);
        }}
        accessible={false}
        style={{flex: 1}}>
        <BlurView blurType="dark" blurAmount={1} style={{flex: 1}} />
        <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
            <View style={styles.container}>
              <View style={styles.row}>
                <Tag />
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Clear />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Калькулятор коробок</Text>
              <Input
                value={length}
                setValue={setLength}
                placeholder={'Длина коробки (см)'}
                keyboardType={'numeric'}
                style={{marginBottom: 12}}
              />
              <Input
                value={width}
                setValue={setWidth}
                placeholder={'Ширина коробки (см)'}
                keyboardType={'numeric'}
                style={{marginBottom: 12}}
              />
              <Input
                value={height}
                setValue={setHeight}
                placeholder={'Высота коробки (см)'}
                keyboardType={'numeric'}
                style={{marginBottom: 12}}
              />
              <Input
                value={qty}
                setValue={setQty}
                placeholder={'Количество коробок'}
                keyboardType={'numeric'}
                style={{marginBottom: 24}}
              />
              <View
                style={[
                  styles.volumeContainer,
                  !volumeModal ? styles.volumeContainerLowOpacity : null,
                ]}>
                <Text style={styles.volumeLabel}>Объем</Text>
                <Text style={styles.volume}>
                  {volumeModal ? `${volumeModal} м3` : 'N'}
                </Text>
              </View>
              <View style={styles.row}>
                <Button
                  style={{marginRight: 15, marginBottom: 0, width: '70%'}}>
                  Принять
                </Button>
                <TouchableOpacity onPress={addTag}>
                  <Plus />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default CalculatorModal;
