import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import * as RootNavigation from '../../../../../../navigation/RootNavigation';

import WhiteBox from '../../../../../images/svg/whiteBox.svg';
import Arrow from '../../../../../images/svg/arrowInWay.svg';
import Point from '../../../../../images/svg/pointInWay.svg';

import styles from './WayInnerStyles';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../../../../../utils/hooks';
import {setMapOrderAddress} from '../../../../../store/slice/MainSlice';

const WayInner = ({
  fromWhere,
  setFromWhere,
  focusFromWhere,
  toWhere,
  setToWhere,
  focusToWhere,
  handleFocus,
  visible,
}) => {
  const dispatch = useAppDispatch();

  const changeText = (text, mode) => {
    if (mode === 'from') {
      setFromWhere({...fromWhere, text});
    }
    if (mode === 'to') {
      setToWhere({...toWhere, text});
    }

    axios({
      method: 'get',
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=pk.eyJ1IjoicHJvZGl1cyIsImEiOiJjbDlyOWIyNzkwMDIyM29waW5iN2g2bDVuIn0.TbhpPoFoUJM6CME8fcfNdQ`,
    })
      .then(({data}) => {
        dispatch(
          setMapOrderAddress({text, coordinates: data.features[0].center}),
        );
      })
      .catch(e => console.log(e));
  };

  const openCart = mode => {
    RootNavigation.navigate('MapOrder', {goBack: 'CreateOrder'});
    handleFocus(mode);
  };

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
              value={fromWhere.text}
              onChange={({nativeEvent: {text}}) => changeText(text, 'from')}
            />
            <TouchableOpacity
              onPress={() => openCart('focusFromWhere')}
              style={[styles.map, visible ? styles.mapActive : null]}>
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
              value={toWhere.text}
              onChange={({nativeEvent: {text}}) => changeText(text, 'to')}
            />
            <TouchableOpacity
              onPress={() => openCart('focusToWhere')}
              style={[styles.map, visible ? styles.mapActive : null]}>
              <Text style={styles.textMap}>Карта</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Shadow>
    </View>
  );
};

export default WayInner;
