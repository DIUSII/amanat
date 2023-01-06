import React, {useState} from 'react';

import BlockedModal from '../../components/BlockedModal/BlockedModal';

import ListOrder from '../ListOrder/ListOrder';
import ListReview from '../Review/ListReview';

import star from './assets/images/star.svg';
import clear from './assets/images/clear.svg';
import lock from './assets/images/lock.svg';
import photoFace from './assets/images/photoFace.png';

import {
  BlockedContainer, BlockedStatusContainer,
  CategoriesCargo, Cause,
  CheckboxContainer,
  CheckboxGroupContainer,
  CheckboxLabel,
  ClearLabel, CommentContainer,
  Container,
  Content,
  Date,
  DriverLabel,
  FixedContainer,
  Form,
  Grade,
  GradeLabel,
  HeaderContainer,
  Image,
  ImageClear,
  ImageContainer,
  InfoCarBlock,
  InfoCarContainer,
  InfoCarTitle,
  InfoUser,
  Input,
  Name,
  NavBar,
  NavBarContainer,
  Phone,
  QtyReadyOrder,
  SizeCar,
  Star,
  Title,
  TypeCar,
  VolumeCargo,
  WeightCargo,
  СauseLabel,
} from './DriverStyles';

const Driver = () => {
  const [typeArray, setTypeArray] = useState('order');
  const [visibleModal, setVisibleModal] = useState(false);
  const [blocked, setBlocked] = useState({status: false, text: ''});

  return (
    <Container>
      <FixedContainer>
        <HeaderContainer>
          <DriverLabel>Водители</DriverLabel> / <Name>Литвинов Максим Андреевич</Name>
        </HeaderContainer>
        <Content>
          <Form>
            <ImageContainer>
              <Image src={photoFace} alt="photo-face" />
            </ImageContainer>
            <InfoUser>
              <Title>Литвинов Максим Андреевич</Title>
              <Grade>
                <Star src={star} alt="star" />
                <GradeLabel>4.9</GradeLabel>
              </Grade>
              <Phone>+7 (702) 547 47 48</Phone>
              <QtyReadyOrder>Выполнено заказов: 47</QtyReadyOrder>
              <Date>Дата регистрации: 27.07.2020</Date>
              <CheckboxGroupContainer>
                <CheckboxContainer>
                  <Input type="checkbox" id="scales" name="scales" />
                  <CheckboxLabel>Брендированный</CheckboxLabel>
                </CheckboxContainer>
                <CheckboxContainer>
                  <Input type="checkbox" id="scales" name="scales" />
                  <CheckboxLabel>Приоритетное обслуживание</CheckboxLabel>
                </CheckboxContainer>
              </CheckboxGroupContainer>
            </InfoUser>
          </Form>
          {
            !blocked.status ? (
              <BlockedStatusContainer onClick={() => setVisibleModal(true)}>
                <ImageClear src={clear} alt="clear" />
                <ClearLabel>Заблокировать</ClearLabel>
              </BlockedStatusContainer>
            ) : (
              <BlockedContainer>
                <BlockedStatusContainer onClick={() => setBlocked({status: false, text: ''})}>
                  <ImageClear src={lock} alt="lock" />
                  <ClearLabel>Разблокировать</ClearLabel>
                </BlockedStatusContainer>
                <CommentContainer>
                  <СauseLabel>Причина блокировки:</СauseLabel>
                  <Cause>{blocked.text}</Cause>
                </CommentContainer>
              </BlockedContainer>
            )
          }
        </Content>
        <InfoCarContainer>
          <InfoCarBlock>
            <InfoCarTitle>Информация об автомобиле</InfoCarTitle>
            <TypeCar>Тип машины: самосвал</TypeCar>
            <SizeCar>Размер кузова: Длина – 10м, Ширина – 10м, Высота – 10м</SizeCar>
          </InfoCarBlock>
          <InfoCarBlock>
            <InfoCarTitle>Грузовая информация</InfoCarTitle>
            <CategoriesCargo>Категории грузов: произвольная доставка, сыпучие грузы, строительные грузы</CategoriesCargo>
            <WeightCargo>Вес груза (кг): 1 – 50</WeightCargo>
            <VolumeCargo>Объем груза (м²): 1 – 25</VolumeCargo>
          </InfoCarBlock>
        </InfoCarContainer>

        <NavBarContainer>
          <NavBar onClick={() => setTypeArray('order')} active={typeArray === 'order'}>Заказы</NavBar>
          <NavBar onClick={() => setTypeArray('review')} active={typeArray === 'review'}>Отзывы</NavBar>
        </NavBarContainer>
      </FixedContainer>

      {typeArray === 'order' ? <ListOrder /> : <ListReview />}

      {/* MODAL */}
      <BlockedModal active={visibleModal} setActive={setVisibleModal} setBlocked={setBlocked} />
    </Container>
  );
};

export default Driver;