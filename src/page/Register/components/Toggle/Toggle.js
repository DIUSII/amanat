import React, {useRef, useState} from 'react';
import {Text, View, Animated, TouchableOpacity} from 'react-native';

import styles from './ToggleStyles';

const Toggle = ({style, role, setRole}) => {
  const changeToggle = roleUser => {
    setRole(roleUser);
  };

  return (
    <Animated.View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => changeToggle('user')}
        style={[styles.item, role === 'user' ? styles.itemActive : null]}>
        <Text style={styles.text}>Заказчик</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeToggle('driver')}
        style={[styles.item, role === 'driver' ? styles.itemActive : null]}>
        <Text style={styles.text}>Водитель</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Toggle;
