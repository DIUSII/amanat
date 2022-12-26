import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import styles from './ButtonStyles';

const Button = ({disabled, children, style, styleInner, onPress, loading}) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={[styles.container, style, {opacity: disabled ? 0.5 : 1}]}>
      <LinearGradient
        style={[styles.linearGradient, styleInner]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#392D92', '#2A2263']}>
        {loading ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <Text style={styles.text}>{children}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
