import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import ModalCamera from '../Camera/components/ModalCamera/ModalCamera';

import AddCircle from '../../images/svg/addCircle.svg';
import Pencil from '../../images/svg/pencil.svg';

import styles from './UserAvatarStyles';

const UserAvatar = ({style}) => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState('');

  return (
    <TouchableOpacity onPress={() => setVisible(true)} style={[styles.container, style]}>
      {image && image.assets && image.assets[0].uri ? (
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          source={{
            uri: image && image.assets[0].uri,
          }}
          style={styles.image}
        />
      ) : (
        <View style={styles.initContainer}>
          <AddCircle />
        </View>
      )}
      <Pencil style={styles.pencil} />
      <ModalCamera
        visible={visible}
        setVisible={setVisible}
        setImage={setImage}
      />
    </TouchableOpacity>
  );
};

export default UserAvatar;
