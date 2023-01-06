import React, {useState} from 'react';

import ListInfo from './assets/components/ListInfo/ListInfo';

import BlockedModal from '../../components/BlockedModal/BlockedModal';

import clear from './assets/images/clear.svg';
import lock from './assets/images/lock.svg';
import photoFace from './assets/images/photoFace.png';

import {
  BlockedContainer, BlockedStatusContainer,
  Cause,
  ClearLabel, CommentContainer,
  Container,
  Content,
  Date,
  DriverLabel,
  FixedContainer,
  Form,
  HeaderContainer,
  Image,
  ImageClear,
  ImageContainer,
  InfoUser,
  Name,
  Phone,
  QtyReadyOrder,
  Title,
  СauseLabel,
} from './UserStyles';

const User = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [blocked, setBlocked] = useState({status: false, text: ''});

  return (
    <Container>
      <FixedContainer>
        <HeaderContainer>
          <DriverLabel>Заказчики</DriverLabel> / <Name>Литвинов Максим Андреевич</Name>
        </HeaderContainer>
        <Content>
          <Form>
            <ImageContainer>
              <Image src={photoFace} alt="photo-face" />
            </ImageContainer>
            <InfoUser>
              <Title>Литвинов Максим Андреевич</Title>
              <Phone>+7 (702) 547 47 48</Phone>
              <QtyReadyOrder>Было поездок: 47</QtyReadyOrder>
              <Date>Дата регистрации: 27.07.2020</Date>
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
      </FixedContainer>

      <ListInfo />

      {/* MODAL */}
      <BlockedModal active={visibleModal} setActive={setVisibleModal} setBlocked={setBlocked} />
    </Container>
  );
};

export default User;