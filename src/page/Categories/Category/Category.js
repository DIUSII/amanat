import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import styles from './CategoryStyles';

const Category = ({category, onPress, style}) => {
  if (!category || !onPress) {
    return null;
  }
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Shadow
        distance={1}
        startColor={'#DFDFE650'}
        endColor={'#DFDFE650'}
        style={{width: '100%'}}
        offset={[0, 2]}>
        <View
          style={[
            styles.category,
            category.active ? styles.categoryActive : null,
          ]}>
          <View
            style={[styles.icon, category.active ? styles.iconActive : null]}>
            {category.active ? category.iconActive : category.icon}
          </View>
          <Text
            style={[styles.title, category.active ? styles.titleActive : null]}>
            {category.title}
          </Text>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default Category;
