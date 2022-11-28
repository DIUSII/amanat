import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import UserAvatar from '../../src/components/UserAvatar/UserAvatar';

import styles from './CustomDrawerContentStyles';

const CustomDrawerContent = ({navigation}) => {
  const navigationList = [
    {
      id: 0,
      title: 'Грузоперевозки',
      navigation: '',
    },
    {
      id: 1,
      title: 'Контакты по ремонту',
      navigation: '',
    },
    {
      id: 2,
      title: 'Личный кабинет',
      navigation: 'Profile',
    },
    {
      id: 3,
      title: 'Настройки',
      navigation: '',
    },
    {
      id: 4,
      title: 'Помощь',
      navigation: '',
    },
    {
      id: 5,
      title: 'Стать водителем',
      navigation: '',
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.userInfoContainer}>
        <UserAvatar />
        <Text style={styles.fullName}>Имя Фамилия</Text>
        <Text style={styles.phone}>+ 7 999 546 78 98</Text>
      </View>
      <View style={styles.navigationContainer}>
        {navigationList.map(item => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate(item.navigation)}
            key={item.id}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        <View style={{flexDirection: 'row', marginBottom: 30}}>
          <TouchableOpacity style={styles.logOut}>
            <Text style={[styles.title, styles.underline]}>Выход</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomDrawerContent;
