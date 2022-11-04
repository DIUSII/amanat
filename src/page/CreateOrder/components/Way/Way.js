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

const Way = () => {
  const [fromWhere, setFromWhere] = useState('');
  const [toWhere, setToWhere] = useState('');
  const [focusFromWhere, setFocusFromWhere] = useState(false);
  const [focusToWhere, setFocusToWhere] = useState(false);
  const [visible, setVisible] = useState(false);
  const [address, setAddress] = useState([]);

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
    focusFromWhere ? setFromWhere(address) : setToWhere(address);
  };

  useEffect(() => {
    const loading = async () => {
      if (fromWhere || toWhere) {
        setAddress(await getDadata(focusFromWhere ? fromWhere : toWhere));
      }
    };

    loading();
  }, [fromWhere, toWhere]);

  return (
    <View style={{flex: 1}}>
      <WayInner
        handleFocus={handleFocus}
        setFromWhere={setFromWhere}
        setToWhere={setToWhere}
        focusToWhere={focusToWhere}
        focusFromWhere={focusFromWhere}
        toWhere={toWhere}
        fromWhere={fromWhere}
      />
      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          // setFocusFromWhere(false);
          // setFocusToWhere(false);
          setVisible(false);
        }}>
        <TouchableOpacity onPress={() => setVisible(false)} style={{flex: 1}}>
          <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
            <WayInner
              handleFocus={handleFocus}
              setFromWhere={setFromWhere}
              setToWhere={setToWhere}
              focusToWhere={focusToWhere}
              focusFromWhere={focusFromWhere}
              toWhere={toWhere}
              fromWhere={fromWhere}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              styles={styles.list}>
              <View style={styles.listContent}>
                {address.map((addressItem, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.item}
                    onPress={() => handleWay(addressItem.value)}>
                    <Text style={styles.textAddress}>{addressItem.value}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Way;
