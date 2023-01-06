import React from 'react';
import {useNavigate} from 'react-router-dom';

import arrow from './assets/images/arrow.svg';

import {
  Arrow,
  GroupArrow,
  Input,
  LabelTHead,
  Text,
  BackgroundStylesHeaders,
  FixedContainer,
  BackgroundStyles,
  RowHeader,
} from './ListOrderStyles';

const ListOrder = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/order');
  };

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
            <RowHeader>
              <LabelTHead disabledButtonMargin>Сумма</LabelTHead>
              <GroupArrow>
                <Arrow src={arrow} alt="arrow" rotate firstChild opacity={true} />
                <Arrow src={arrow} alt="arrow"  />
              </GroupArrow>
            </RowHeader>
          </div>
          <div>
            <RowHeader>
              <LabelTHead disabledButtonMargin>Дистанция</LabelTHead>
              <GroupArrow>
                <Arrow src={arrow} alt="arrow" rotate firstChild opacity={true} />
                <Arrow src={arrow} alt="arrow"  />
              </GroupArrow>
            </RowHeader>
          </div>
          <div>
            <LabelTHead>Статус</LabelTHead>
            <Input type="text" placeholder={'Поиск по ФИО'} />
          </div>
        </FixedContainer>
      </BackgroundStylesHeaders>
      <BackgroundStyles>
        <FixedContainer alignCenter onClick={handleNavigation}>
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
            <Text>5 км</Text>
          </div>
          <div>
            <Text>Арбитраж</Text>
          </div>
        </FixedContainer>
      </BackgroundStyles>
    </div>
  );
};

export default ListOrder;