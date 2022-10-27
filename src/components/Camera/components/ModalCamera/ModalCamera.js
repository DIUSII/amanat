import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

import styles from './ModalCameraStyles';
import Button from '../../../Button/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ModalCamera = ({visible, setVisible, setImage}) => {
  const takeImage = {
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    },
  };
  const selectImage = {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    },
  };

  const onButtonPress = React.useCallback(async (type, options) => {
    if (type === 'capture') {
      await launchCamera(options, setImage);
    } else {
      await launchImageLibrary(options, setImage);
    }
    setVisible(false);
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}>
      <TouchableOpacity
        onPress={() => setVisible(false)}
        style={styles.container}>
        <TouchableOpacity activeOpacity={1} style={styles.bottomSheet}>
          <View style={styles.line} />
          <View style={styles.content}>
            <Button
              onPress={() => onButtonPress(takeImage.type, takeImage.options)}>
              Сделать снимок
            </Button>
            <Button
              onPress={() =>
                onButtonPress(selectImage.type, selectImage.options)
              }>
              Выбрать из галереи
            </Button>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalCamera;
