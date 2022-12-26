import React, {useEffect, useState} from 'react';
import Category from './Category/Category';
import Title from '../../components/Title/Title';
import {ActivityIndicator, ScrollView, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../utils/hooks';

import Button from '../../components/Button/Button';

import HeavyCar from '../../images/svgChanges/HeavyCar';
import Hands from '../../images/svgChanges/Hands';
import Bomb from '../../images/svgChanges/Bomb';
import ManyBox from '../../images/svgChanges/ManyBox';
import Flasks from '../../images/svgChanges/Flasks';
import Loader from '../../images/svgChanges/Loader';
import SmallBox from '../../images/svgChanges/SmallBox';
import Car from '../../images/svgChanges/Car';

import styles from './CategoriesStyles';
import {getCargoCategories} from '../../store/slice/MainSlice';

const Categories = ({navigation}) => {
  const dispatch = useAppDispatch();

  const cargoCategories = useAppSelector(state => state.main.cargoCategories);
  const testDataCargoCategories = [
    {
      id: 0,
      icon: <Car />,
      iconActive: (
        <Car stopColorFirstGradient={'#fff'} stopColorSecondGradient={'#fff'} />
      ),
      title: 'Отдельная машина',
      active: false,
      navigation: '',
    },
    {
      id: 1,
      icon: <HeavyCar />,
      iconActive: (
        <HeavyCar
          stopColorFirstGradient={'#fff'}
          stopColorSecondGradient={'#fff'}
        />
      ),
      title: 'Строительные грузы',
      active: false,
      navigation: '',
    },
    {
      id: 2,
      icon: <Hands />,
      iconActive: (
        <Hands
          stopColorFirstGradient={'#fff'}
          stopColorSecondGradient={'#fff'}
        />
      ),
      title: 'Коммерческие грузы',
      active: false,
      navigation: '',
    },
    {
      id: 3,
      icon: <Bomb />,
      iconActive: (
        <Bomb
          stopColorFirstGradient={'#fff'}
          stopColorSecondGradient={'#fff'}
        />
      ),
      title: 'Транспорт и запчасти',
      active: false,
      navigation: '',
    },
    {
      id: 4,
      icon: <ManyBox />,
      iconActive: (
        <ManyBox
          stopColorFirstGradient={'#fff'}
          stopColorSecondGradient={'#fff'}
        />
      ),
      title: 'Сыпучие грузы',
      active: false,
      navigation: '',
    },
    {
      id: 5,
      icon: <Flasks />,
      iconActive: (
        <Flasks
          stopColorFirstGradient={'#fff'}
          stopColorSecondGradient={'#fff'}
        />
      ),
      title: 'Спец. грузы и другое',
      active: false,
      navigation: '',
    },
    {
      id: 6,
      icon: <Loader />,
      iconActive: (
        <Loader
          stopColorFirstGradient={'#fff'}
          stopColorSecondGradient={'#fff'}
        />
      ),
      title: 'Манипулятор',
      active: false,
      navigation: '',
    },
    {
      id: 7,
      icon: <SmallBox />,
      iconActive: <SmallBox fill={'#fff'} />,
      title: 'Произвольная доставка',
      active: false,
      navigation: '',
    },
  ];

  const compareTwoArray = () =>
    (cargoCategories &&
      cargoCategories.map(cargoCategory => {
        return {
          ...testDataCargoCategories.find(
            ({title}) => title === cargoCategory.title,
          ),
          id: cargoCategory.id,
        };
      })) ||
    [];

  const [categories, setCategories] = useState([]);

  const disabledButton = !categories.find(category => category.active);

  const changeActive = id => {
    const mapArray = categories.map(category =>
      category.id === id
        ? {...category, active: !category.active}
        : {...category, active: false},
    );
    setCategories(mapArray);
  };

  useEffect(() => {
    dispatch(getCargoCategories());
  }, []);

  useEffect(() => {
    setCategories(compareTwoArray());
  }, [cargoCategories]);

  return (
    <ScrollView style={styles.scrollView}>
      {categories && categories.length ? (
        <View style={styles.container}>
          {categories.map((category, index, arr) =>
            category.id % 2 !== 0 ? (
              <View style={styles.content} key={category.id}>
                <Category
                  category={category}
                  onPress={() => changeActive(category.id)}
                  style={{marginRight: 20}}
                />
                <Category
                  category={arr[index + 1]}
                  onPress={() => changeActive(arr[index + 1].id)}
                />
              </View>
            ) : null,
          )}
          <Button
            disabled={disabledButton}
            onPress={() => navigation.navigate('CreateOrder')}
            style={{marginTop: 23}}>
            Далее
          </Button>
        </View>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={'#392D92'} />
        </View>
      )}
    </ScrollView>
  );
};

export default Categories;
