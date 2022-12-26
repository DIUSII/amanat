import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../src/utils/hooks';

import {logOut} from '../../src/store/slice/MainSlice';

import UserAvatar from '../../src/components/UserAvatar/UserAvatar';

import styles from './CustomDrawerContentStyles';

const CustomDrawerContent = ({navigation}) => {
  const dispatch = useAppDispatch();

  const authorization = useAppSelector(state => state.auth.authorization);

  const user = useAppSelector(state => state.main.user);

  const navigationList = [
    {
      id: 0,
      title: 'Грузоперевозки',
      navigation: 'Main',
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
      navigation: 'RegisterDriver',
    },
  ];

  if (!user) {
    return null;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.userInfoContainer}>
        <UserAvatar />
        <Text style={styles.fullName}>
          {user.properties.first_name} {user.properties.last_name}
        </Text>
        <Text style={styles.phone}>+{user.properties.phone}</Text>
      </View>
      <View style={styles.navigationContainer}>
        {navigationList
          .filter(item =>
            user.properties.is_driver ? item.title !== 'Стать водителем' : item,
          )
          .map(item => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate(item.navigation)}
              key={item.id}>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        <View style={{flexDirection: 'row', marginBottom: 30}}>
          <TouchableOpacity
            onPress={() => dispatch(logOut())}
            style={styles.logOut}>
            <Text style={[styles.title, styles.underline]}>Выход</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomDrawerContent;
