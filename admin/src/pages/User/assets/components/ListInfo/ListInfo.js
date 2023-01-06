import React from 'react';

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
} from './ListInfoStyles';

const ListInfo = () => {
  return (
    <div>
      <BackgroundStylesHeaders>
        <FixedContainer>
          <div>
            <LabelTHead>Id заказа</LabelTHead>
            <Input type="text" placeholder={'Поиск'} />
          </div>
          <div>
            <LabelTHead>ФИО водителя</LabelTHead>
            <Input type="text" placeholder={'Поиск по ФИО'} />
          </div>
          <div>
            <LabelTHead>Начальный пункт</LabelTHead>
            <Input type="text" placeholder={'Поиск по адресу'} />
          </div>
          <div>
            <LabelTHead>Конечный пункт</LabelTHead>
            <Input type="text" placeholder={'Поиск по адресу'} />
          </div>
          <div>
            <RowHeader>
              <LabelTHead disabledButtonMargin>стоимость заказа</LabelTHead>
              <GroupArrow>
                <Arrow src={arrow} alt="arrow" rotate firstChild opacity={true} />
                <Arrow src={arrow} alt="arrow"  />
              </GroupArrow>
            </RowHeader>
          </div>
          <div>
            <LabelTHead>Статус</LabelTHead>
            <Input type="text" placeholder={'Поиск по адресу'} />
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
            <Text>пр-т Женис, 78</Text>
          </div>
          <div>
            <Text>ул. Алии Молдагуловой, 7</Text>
          </div>
          <div>
            <Text>5 000 ₸</Text>
          </div>
          <div>
            <Text>Выполнен</Text>
          </div>
        </FixedContainer>
      </BackgroundStyles>
    </div>
  );
};

export default ListInfo;