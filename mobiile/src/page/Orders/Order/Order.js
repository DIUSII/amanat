import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import Button from '../../../components/Button/Button';
import Tags from './Tags/Tags';
import Timer from './TimerModal/TimerModal';

import Date from '../../../images/svg/date.svg';
import Box from '../../../images/svg/whiteBox.svg';

import styles from './OrderStyles';
import TimerModal from './TimerModal/TimerModal';

const Order = ({order}) => {
  const [visibleModel, setVisibleModel] = useState(false);
  return (
    <View style={styles.container}>
      <Shadow
        distance={2}
        startColor={'#DFDFE650'}
        endColor={'#DFDFE650'}
        style={{width: '100%'}}
        offset={[0, 3]}>
        <View style={styles.content}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{order.date}</Text>
          </View>
          <View style={styles.padding}>
            <View style={styles.infoContainer}>
              <Box style={{marginRight: 12}} />
              <Text style={styles.info}>{order.address}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Date style={{marginRight: 12}} />
              <Text style={styles.info}>{order.startLoaded}</Text>
            </View>
            <Tags tags={order.tags} />
            <Button
              onPress={() => setVisibleModel(true)}
              style={{marginTop: 12}}>
              Принять заказ
            </Button>
          </View>
        </View>
      </Shadow>
      <TimerModal visible={visibleModel} setVisible={setVisibleModel} />
    </View>
  );
};

export default Order;
