import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import Camera from '../../components/Camera/Camera';
import Button from '../../components/Button/Button';

import Clear from '../../images/svg/clear.svg';

import styles from './PhotoReportStyles';

const {width} = Dimensions.get('window');

const PhotoReport = () => {
  const [images, setImages] = useState([]);
  const widthWithoutPadding = width - 60;

  const clearElement = id => {
    setImages(innerImages =>
      innerImages.filter(innerImage => innerImage.id !== id),
    );
  };

  return (
    <View style={styles.container}>
      <Camera text={'Загрузите фото'} mode={'outside'} setImages={setImages} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.content}>
          {images &&
            images.map((image, index) => (
              <View
                style={{
                  width: widthWithoutPadding * 0.3,
                  height: widthWithoutPadding * 0.3,
                  marginHorizontal:
                    (index - 1) % 3 === 0 ? widthWithoutPadding * 0.05 : 0,
                  marginBottom: widthWithoutPadding * 0.05,
                }}
                key={index}>
                <TouchableOpacity
                  onPress={() => clearElement(image.id)}
                  style={styles.clear}>
                  <Clear />
                </TouchableOpacity>
                <Image
                  resizeMode="cover"
                  resizeMethod="scale"
                  source={{
                    uri: image && image.uri,
                  }}
                  style={{width: '100%', height: '100%', borderRadius: 30}}
                />
              </View>
            ))}
        </View>
      </ScrollView>
      <Button>Отправить</Button>
    </View>
  );
};

export default PhotoReport;
