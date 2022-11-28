import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './TimerStyles';

const Timer = () => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(innerCounter => --innerCounter);
    }, 1000);

    if (count <= 0) {
      clearInterval(interval);
    }
  }, []);

  return (
    <View>
      {count > 0 ? (
        <Text style={styles.count}>
          Повторная отправка доступна через {count}c
        </Text>
      ) : (
        <TouchableOpacity onPress={() => setCount(60)}>
          <Text style={[styles.count, styles.underline]}>
            Отправить код снова
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Timer;
