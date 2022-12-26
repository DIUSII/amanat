import React, {useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import WhiteBox from '../../../../images/svg/whiteBox.svg';
import Arrow from '../../../../images/svg/arrowInWay.svg';
import Point from '../../../../images/svg/pointInWay.svg';

import styles from './WayStyles';
import {getDadata} from '../../../../utils/dadata';
import WayInner from './WayInner/WayInner';
import {useAppDispatch, useAppSelector} from '../../../../utils/hooks';
import {setMapOrderAddress} from '../../../../store/slice/MainSlice';
import Button from '../../../../components/Button/Button';
import axios from 'axios';

const Way = ({fromWhere, setFromWhere, toWhere, setToWhere}) => {
  const dispatch = useAppDispatch();

  const mapOrderAddress = useAppSelector(state => state.main.mapOrderAddress);

  const [focusFromWhere, setFocusFromWhere] = useState(false);
  const [focusToWhere, setFocusToWhere] = useState(false);
  const [address, setAddress] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleFocus = value => {
    setVisible(true);

    if (value === 'focusFromWhere') {
      setFocusFromWhere(true);
      setFocusToWhere(false);
    } else if (value === 'focusToWhere') {
      setFocusToWhere(true);
      setFocusFromWhere(false);
    }
  };

  const handleWay = address => {
    setVisible(false);

    axios({
      method: 'get',
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicHJvZGl1cyIsImEiOiJjbDlyOWIyNzkwMDIyM29waW5iN2g2bDVuIn0.TbhpPoFoUJM6CME8fcfNdQ`,
    })
      .then(({data}) => {
        dispatch(
          setMapOrderAddress({
            text: address,
            coordinates: data.features[0].center,
          }),
        );
      })
      .catch(e => console.log(e));
    focusFromWhere
      ? setFromWhere(innerFromWhere => ({...innerFromWhere, text: address}))
      : setToWhere(innerToWhere => ({...innerToWhere, text: address}));
  };

  useEffect(() => {
    const loading = async () => {
      if (fromWhere.text || toWhere.text) {
        setAddress(
          await getDadata(focusFromWhere ? fromWhere.text : toWhere.text),
        );
      }
    };

    loading();
  }, [fromWhere.text, toWhere.text]);

  useEffect(() => {
    if (focusFromWhere) {
      setFromWhere(mapOrderAddress);
    }
    if (focusToWhere) {
      setToWhere(mapOrderAddress);
    }
  }, [mapOrderAddress]);

  useEffect(() => {
    if (focusFromWhere) {
      dispatch(setMapOrderAddress(fromWhere));
    }
    if (focusToWhere) {
      dispatch(setMapOrderAddress(toWhere));
    }
  }, [focusFromWhere, focusToWhere]);

  return (
    <View style={{flex: 1, position: 'relative', zIndex: 2}}>
      <WayInner
        handleFocus={handleFocus}
        setFromWhere={setFromWhere}
        setToWhere={setToWhere}
        focusToWhere={focusToWhere}
        focusFromWhere={focusFromWhere}
        toWhere={toWhere}
        fromWhere={fromWhere}
        visible={visible}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={visible ? styles.modalContainer : {height: 0}}>
        <ScrollView showsVerticalScrollIndicator={false} styles={styles.list}>
          <View style={styles.listContent}>
            {address &&
              address.map((addressItem, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.item}
                  onPress={() => handleWay(addressItem.value)}>
                  <Text style={styles.textAddress}>{addressItem.value}</Text>
                </TouchableOpacity>
              ))}
          </View>
          <Button style={styles.hideVisible} onPress={() => setVisible(false)}>
            Готово
          </Button>
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
};

export default Way;
