import React, {useState} from 'react';
import Category from './Category/Category';
import Title from '../../components/Title/Title';
import {ScrollView, View} from 'react-native';

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

const Categories = ({navigation}) => {
  const [categories, setCategories] = useState([
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
      iconActive: (
        <SmallBox
          stopColorFirstGradient={'#fff'}
          stopColorSecondGradient={'#fff'}
        />
      ),
      title: 'Произвольная доставка',
      active: false,
      navigation: '',
    },
  ]);

  const changeActive = index => {
    const category = categories.find(item => item.id === index);
    const falseActiveInCategories = categories.map(item => {
      return {...item, active: false};
    });
    category.active = !category.active;
    setCategories([
      ...falseActiveInCategories.slice(0, index),
      category,
      ...falseActiveInCategories.slice(index + 1),
    ]);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {categories.map((category, index, arr) =>
          category.id % 2 === 0 ? (
            <View style={styles.content} key={category.id}>
              <Category
                category={category}
                onPress={() => changeActive(index)}
                style={{marginRight: 20}}
              />
              <Category
                category={arr[index + 1]}
                onPress={() => changeActive(index + 1)}
              />
            </View>
          ) : null,
        )}
        <Button
          onPress={() => navigation.navigate('CreateOrder')}
          style={{marginTop: 23}}>
          Далее
        </Button>
      </View>
    </ScrollView>
  );
};

export default Categories;
