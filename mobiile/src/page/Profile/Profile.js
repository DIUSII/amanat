import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {useAppDispatch, useAppSelector} from '../../utils/hooks';

import UserAvatar from '../../components/UserAvatar/UserAvatar';
import Phone from './Phone/Phone';
import Cards from './Cards/Cards';
import Button from '../../components/Button/Button';
import TypeDriver from './TypeDriver/TypeDriver';

import styles from './ProfileStyles';
import {logOut} from '../../store/slice/MainSlice';

const Profile = () => {
  const dispatch = useAppDispatch();

  const {properties} = useAppSelector(state => state.main.user);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={{marginBottom: 40}}>
          <View style={styles.userAvatar}>
            <UserAvatar style={{borderColor: '#DFDEE7'}} />
            <Text style={styles.fullName}>
              {properties.first_name} {properties.last_name}
            </Text>
          </View>
          <Phone />
          {properties.is_driver ? <TypeDriver /> : null}
          {properties.bank_cards ? <Cards /> : null}
        </View>
        <View>
          <Button>Добавить карту</Button>
          <TouchableOpacity onPress={() => dispatch(logOut())}>
            <Text style={styles.logOut}>Выйти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
