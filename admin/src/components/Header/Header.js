import React, {useState} from 'react';

import logo from './assets/images/logo.png';

import {Button, Container, ContainerImage, Image, Item, List, NavbarLink} from './HeaderStyles';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  const [list, setList] = useState([
    {
      id: 0,
      text: 'Водители',
      navigation: '/list-driver',
      active: true,
    },
    {
      id: 1,
      text: 'Заказчики',
      navigation: '/list-user',
      active: false,
    },
    {
      id: 2,
      text: 'Заказы',
      navigation: '/list-order',
      active: false,
    },
    {
      id: 3,
      text: 'Отзывы',
      navigation: '/list-review',
      active: false,
    },
    // {
    //   id: 4,
    //   text: 'Помощь',
    //   active: false,
    // },
    // {
    //   id: 5,
    //   text: 'Настройки',
    //   active: false,
    // },
  ]);

  const handleActive = (id) => {
    const changelist = list.map(item => {
      if (item.id === id) {
        return {...item, active: true};
      }

      return {...item, active: false};
    });

    setList(changelist);
  }

  return (
    <Container>
      <ContainerImage>
        <Image src={logo} alt="logo" />
      </ContainerImage>
      <List>
        {
          list.map(item => (
            <NavbarLink key={item.id} to={item.navigation}>
              <Item
                onClick={() => handleActive(item.id)}
                active={item.active}>
                {item.text}
              </Item>
            </NavbarLink>
          ))
        }
      </List>
      <Button>Добавить водителя</Button>
    </Container>
  );
};

export default Header;