import React from 'react';

import DatePickerInput from '../../components/DateTimePickerInput/DatePickerInput';

import check from './assets/images/check.svg';
import arrow from './assets/images/arrow.svg';

import {
  Arrow,
  GroupArrow,
  Input,
  LabelTHead,
  Row,
  Text, BackgroundStylesHeaders, FixedContainer, BackgroundStyles, RowHeader,
} from './ListReviewStyles';

const ListReview = () => {
  return (
    <div>
      <BackgroundStylesHeaders>
        <FixedContainer>
          <div>
            <LabelTHead>Id заказа</LabelTHead>
            <Input type="text" placeholder={'Поиск'} />
          </div>
          <div>
            <LabelTHead>ФИО заказчика</LabelTHead>
            <Input type="text" placeholder={'Поиск по ФИО'} />
          </div>
          <div>
            <LabelTHead>ФИО водителя</LabelTHead>
            <Input type="text" placeholder={'Поиск по ФИО'} />
          </div>
          <div>
            <LabelTHead disabledButtonMargin>Сумма</LabelTHead>
          </div>
          <div>
            <LabelTHead disabledButtonMargin>Дата</LabelTHead>
          </div>
          <div>
            <LabelTHead disabledButtonMargin>Оценка</LabelTHead>
          </div>
          <div>
            <LabelTHead disabledButtonMargin>Комментарий</LabelTHead>
          </div>
        </FixedContainer>
      </BackgroundStylesHeaders>
      <BackgroundStyles>
        <FixedContainer alignCenter>
          <div>
            <Text>1765998</Text>
          </div>
          <div>
            <Text>Христорождественский Владислав Александрович</Text>
          </div>
          <div>
            <Text>Малинин Иван Викторович</Text>
          </div>
          <div>
            <Text>5 000 ₸</Text>
          </div>
          <div>
            <Text>17.02.2022</Text>
          </div>
          <div>
            <Text>4.8</Text>
          </div>
          <div>
            <Text>
              Очень классный переезд, без забот! Машина высокая, вместилось все что требовалось. Рекомендую...
            </Text>
          </div>
        </FixedContainer>
      </BackgroundStyles>
    </div>
  );
};

export default ListReview;