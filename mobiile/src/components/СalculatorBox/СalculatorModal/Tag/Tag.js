import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import Clear from '../../../../images/svg/clearTagsInCalculatorModal.svg';

import styles from './TagStyles';

const Tag = ({tags, setTags}) => {
  const clearTag = id => {
    setTags(innerTage => innerTage.filter(tag => tag.id !== id));
  };

  console.log(tags);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {tags &&
          tags.map(tag => (
            <View style={{marginRight: 15}} key={tag.id}>
              <TouchableOpacity
                onPress={() => clearTag(tag.id)}
                style={styles.tags}>
                <Text style={styles.name}>{tag.name} м3</Text>
                <Clear style={styles.clear} />
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default Tag;
