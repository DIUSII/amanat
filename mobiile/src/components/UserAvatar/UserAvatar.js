import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import ModalCamera from '../Camera/components/ModalCamera/ModalCamera';

import AddCircle from '../../images/svg/addCircle.svg';
import Pencil from '../../images/svg/pencil.svg';

import styles from './UserAvatarStyles';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {updateUser} from '../../store/slice/MainSlice';

const UserAvatar = ({style}) => {
  const dispatch = useAppDispatch();

  const {properties} = useAppSelector(state => state.main.user);

  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState('');

  const handleImage = imgForCamera => {
    if (imgForCamera.assets) {
      dispatch(
        updateUser({
          properties: {
            photo: `data:${imgForCamera.assets[0].type};base64,${imgForCamera.assets[0].base64}`,
          },
        }),
      );
      setImage(imgForCamera.assets[0]);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => setVisible(true)}
      style={[styles.container, style]}>
      {properties.photo ? (
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          source={{
            uri: properties.photo,
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
        handleImage={handleImage}
      />
    </TouchableOpacity>
  );
};

export default UserAvatar;
