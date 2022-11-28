import React from 'react';

import {FixedContainer, SubTitle, Title} from './AuthStyles';

const Auth = () => {
  return (
    <FixedContainer className={'fixed-container'}>
      <Title>Телефон</Title>
      <SubTitle>Введите ваш номер телефона, чтобы войти</SubTitle>
    </FixedContainer>
  );
};

export default Auth;
