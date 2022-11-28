import React from 'react';
import {Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import styles from './TagsStyles';

const Tags = ({tags}) => {
  return (
    <View style={styles.container}>
      {tags.map(tag => (
        <View key={tag.id} style={styles.content}>
          <Shadow
            distance={1}
            startColor={'#DFDFE650'}
            endColor={'#DFDFE650'}
            offset={[0, 2]}>
            <View style={styles.tag}>
              <Text style={styles.text}>{tag.title}</Text>
            </View>
          </Shadow>
        </View>
      ))}
    </View>
  );
};

export default Tags;
