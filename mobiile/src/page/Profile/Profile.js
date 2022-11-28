import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import Phone from './Phone/Phone';
import Cards from './Cards/Cards';
import Button from '../../components/Button/Button';
import TypeDriver from './TypeDriver/TypeDriver';

import styles from './ProfileStyles';

const Profile = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={{marginBottom: 40}}>
          <View style={styles.userAvatar}>
            <UserAvatar style={{borderColor: '#DFDEE7'}} />
            <Text style={styles.fullName}>Имя Фамилия</Text>
          </View>
          <Phone />
          <TypeDriver />
          <Cards />
        </View>
        <View>
          <Button>Добавить карту</Button>
          <Text style={styles.logOut}>Выйти</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
