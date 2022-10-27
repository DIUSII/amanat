import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import ModalCamera from './components/ModalCamera/ModalCamera';

import AddCircle from '../../images/svg/addCircle.svg';

import styles from './CameraStyles';

const Camera = ({text}) => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState('');

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setVisible(true)}>
        <Shadow
          distance={1}
          startColor={'#DFDFE650'}
          endColor={'#DFDFE650'}
          style={{width: '100%'}}
          offset={[0, 3]}>
          <View style={styles.innerContainer}>
            {image && image.assets && image.assets[0].uri ? (
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                source={{
                  uri: image && image.assets[0].uri,
                }}
                style={{width: '100%', height: '100%', borderRadius: 30}}
              />
            ) : (
              <View style={{alignItems: 'center'}}>
                <View style={styles.icon}>
                  <AddCircle />
                </View>
                <Text style={styles.text}>{text}</Text>
              </View>
            )}
          </View>
        </Shadow>
      </TouchableOpacity>
      <ModalCamera
        visible={visible}
        setVisible={setVisible}
        setImage={setImage}
      />
    </View>
  );
};

export default Camera;
