import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TouchableOpacity} from 'react-native';

import styles from './ButtonStyles';

const Button = ({children, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient
        style={[styles.linearGradient, style]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#392D92', '#2A2263']}>
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
