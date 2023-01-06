import React from 'react';
import ReactStars from 'react-stars'

import pencil from './assets/images/pencil.svg';

import {
  ChangeStatusContainer,
  ChangeStatusLabel,
  Container,
  GrayText,
  Id,
  InfoContainer,
  PurpleText,
  TipContainer,
  InfoContent,
  Title,
  SubTitle,
  Button, StatusContainer, StatusItem, StatusLabel, StatusDate, Checkbox,
} from './OrderStyles';

const Order = () => {
  return (
    <Container>
      <TipContainer>
        <PurpleText>Заказчики / Иванов Валерий Дмитриевич</PurpleText> / <GrayText>Заказ 3448989</GrayText>
      </TipContainer>
      <Id>ID 3448989</Id>
      <InfoContainer>
        <ChangeStatusContainer>
          <ChangeStatusLabel>В пути к месту разгрузки</ChangeStatusLabel>
          <img src={pencil} alt="pencil" />
        </ChangeStatusContainer>
        <InfoContent>
          <Title>Заказчик: Иванов Валерий Дмитриевич</Title>
          <Title>Водитель: Васильев Иван Андреевич</Title>
          <SubTitle>Сумма: 5 000 ₸ </SubTitle>
          <Button>Изменить стоимость</Button>
        </InfoContent>
        <InfoContent>
          <Title>Начальная точка: ул. Дуйсенова, 5</Title>
          <Title>Конечная точка: пр-т Рыскулова, 8</Title>
          <SubTitle>Дистанция: 5 км </SubTitle>
          <Button>Изменить маршрут</Button>
        </InfoContent>
      </InfoContainer>

      <StatusContainer>
        <StatusItem>
          <StatusLabel>Заказ создан</StatusLabel>
          <StatusDate>14:30</StatusDate>
          <Checkbox type="checkbox" id="horns" name="horns" />
        </StatusItem>
        <div>
          <span>Заказ создан</span>
          <span>14:30</span>
          <img src="" alt=""/>
        </div>
        <div>
          <span>Заказ создан</span>
          <span>14:30</span>
          <img src="" alt=""/>
        </div>
        <div>
          <span>Заказ создан</span>
          <span>14:30</span>
          <img src="" alt=""/>
        </div>
        <div>
          <span>Заказ создан</span>
          <span>14:30</span>
          <img src="" alt=""/>
        </div>
        <div>
          <span>Заказ создан</span>
          <span>14:30</span>
          <img src="" alt=""/>
        </div>
      </StatusContainer>

      <div>
        <h3>Фото погрузки</h3>
        <div>
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
        </div>
      </div>

      <div>
        <h3>Отзыв</h3>
        <ReactStars />
        <span>Все устроило, обращусь снова!</span>
      </div>
    </Container>
  );
};

export default Order;