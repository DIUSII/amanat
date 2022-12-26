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
  const [qty, setQty] = useState('');
  const [tags, setTags] = useState([]);

  const buttonDisabled = !length || !width || !height || !qty;

  const addTag = () => {
    const lastId = (tags.slice(-1)[0] && tags.slice(-1)[0].id + 1) || 0;
    const formulaVolume = (+width * +length * +height * +qty) / 1000000;
    const tag = {id: lastId, name: formulaVolume};

    setTags(innerTags => [...innerTags, tag]);
    setLength('');
    setWidth('');
    setHeight('');
    setQty('');
  };

  const onAccept = () => {
    const formulaVolume = (+width * +length * +height * +qty) / 1000000;
    const tagsSumVolume = tags.reduce((acc, cur) => acc + +cur.name, 0);

    if (!buttonDisabled) {
      const lastId = (tags.slice(-1)[0] && tags.slice(-1)[0].id + 1) || 0;
      const tag = {id: lastId, name: formulaVolume};

      setTags(innerTags => [...innerTags, tag]);
      setLength('');
      setWidth('');
      setHeight('');
      setQty('');
    }

    setVolumeModal(formulaVolume + tagsSumVolume);
    setVolume(formulaVolume + tagsSumVolume);
    setVisible(false);
  };

  useEffect(() => {
    setVolumeModal(tags.reduce((acc, cur) => acc + +cur.name, 0));
  }, [tags]);

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onAccept}>
      <TouchableOpacity onPress={onAccept} accessible={false} style={{flex: 1}}>
        <BlurView blurType="dark" blurAmount={1} style={{flex: 1}} />
        <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
            <View style={styles.container}>
              <View style={styles.row}>
                <Tag tags={tags} setTags={setTags} />
                <TouchableOpacity style={styles.clear} onPress={onAccept}>
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
                  onPress={onAccept}
                  style={{marginRight: 15, marginBottom: 0, width: '70%'}}>
                  Принять
                </Button>
                <TouchableOpacity
                  style={buttonDisabled ? styles.plus : null}
                  disabled={buttonDisabled}
                  onPress={addTag}>
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
