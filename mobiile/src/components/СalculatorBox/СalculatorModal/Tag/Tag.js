import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import Clear from '../../../../images/svg/clearTagsInCalculatorModal.svg';

import styles from './TagStyles';
import {Shadow} from 'react-native-shadow-2';

const Tag = ({tags, setTags}) => {
  const clearTag = id => {
    setTags(innerTage => innerTage.filter(tag => tag.id !== id));
  };

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {tags && tags.map(tag => (
          <Shadow
            distance={1}
            startColor={'#DFDFE650'}
            endColor={'#DFDFE650'}
            style={{width: '100%'}}
            offset={[0, 3]}
            key={tag.id}>
            <TouchableOpacity
              onPress={() => clearTag(tag.id)}
              style={styles.tags}>
              <Text style={styles.name}>{tag.name}</Text>
              <Clear style={styles.clear} />
            </TouchableOpacity>
          </Shadow>
        ))}
      </View>
    </ScrollView>
  );
};

export default Tag;
