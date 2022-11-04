import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import WhiteBox from '../../../../../images/svg/whiteBox.svg';
import Arrow from '../../../../../images/svg/arrowInWay.svg';
import Point from '../../../../../images/svg/pointInWay.svg';

import styles from './WayInnerStyles';

const WayInner = ({
  fromWhere,
  setFromWhere,
  focusFromWhere,
  toWhere,
  setToWhere,
  focusToWhere,
  handleFocus,
}) => {
  return (
    <View style={styles.container}>
      <Shadow
        distance={2}
        startColor={'#DFDFE650'}
        endColor={'#DFDFE650'}
        style={{width: '100%'}}
        offset={[0, 3]}>
        <View style={styles.content}>
          <View style={styles.row}>
            <WhiteBox />
            <TextInput
              autoFocus={focusFromWhere}
              onFocus={() => handleFocus('focusFromWhere')}
              style={styles.input}
              placeholder={'Откуда *'}
              placeholderTextColor={'#ABA9B9'}
              value={fromWhere}
              onChange={({nativeEvent: {text}}) => setFromWhere(text)}
            />
            <TouchableOpacity
              style={[
                styles.map,
                focusFromWhere || focusToWhere ? styles.mapActive : null,
              ]}>
              <Text style={styles.textMap}>Карта</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Arrow style={{marginRight: 20}} />
            <View style={styles.line} />
          </View>
          <View style={styles.row}>
            <Point />
            <TextInput
              autoFocus={focusToWhere}
              onFocus={() => handleFocus('focusToWhere')}
              style={styles.input}
              placeholder={'Куда *'}
              placeholderTextColor={'#ABA9B9'}
              value={toWhere}
              onChange={({nativeEvent: {text}}) => setToWhere(text)}
            />
          </View>
        </View>
      </Shadow>
    </View>
  );
};

export default WayInner;
