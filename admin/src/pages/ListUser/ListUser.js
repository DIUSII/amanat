import React from 'react';
import {useNavigate} from 'react-router-dom';

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
} from './ListUserStyles';

const ListUser = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/user');
  };

  return (
    <div>
      <BackgroundStylesHeaders>
        <FixedContainer>
          <div>
            <LabelTHead>ФИО</LabelTHead>
            <Input type="text" placeholder={'Поиск по ФИО'} />
          </div>
          <div>
            <LabelTHead>Дата регистрации</LabelTHead>
            <DatePickerInput />
          </div>
          <div>
            <RowHeader>
              <LabelTHead disabledButtonMargin>Выполнено заказов</LabelTHead>
              <GroupArrow>
                <Arrow src={arrow} alt="arrow" rotate firstChild opacity={true} />
                <Arrow src={arrow} alt="arrow"  />
              </GroupArrow>
            </RowHeader>
            <Input type="text"/>
          </div>
          <div>
            <RowHeader>
              <LabelTHead disabledButtonMargin>Сумма</LabelTHead>
              <GroupArrow>
                <Arrow src={arrow} alt="arrow" rotate firstChild opacity={true} />
                <Arrow src={arrow} alt="arrow"  />
              </GroupArrow>
            </RowHeader>
            <Input type="text"/>
          </div>
          <div>
            <LabelTHead>Номер телефона</LabelTHead>
            <Input type="text" placeholder={'Поиск по номеру'} />
          </div>
        </FixedContainer>
      </BackgroundStylesHeaders>
      <BackgroundStyles>
        <FixedContainer alignCenter onClick={handleNavigation}>
          <div>
            <Row>
              <Text>Христорождественский Владислав Александрович</Text>
              <img src={check} alt="check"/>
            </Row>
          </div>
          <div>
            <Text>07.12.2020</Text>
          </div>
          <div>
            <Text>700</Text>
          </div>
          <div>
            <Text>300 000 ₸</Text>
          </div>
          <div>
            <Text>+7 (702) 549 67 78</Text>
          </div>
        </FixedContainer>
      </BackgroundStyles>
    </div>
  );
};

export default ListUser;