import React, {useState} from 'react';

import {Container, Background, Button, Textarea, Row, Title, Image, Space} from './BlockedModalStyles';

import cross from './assets/images/cross.svg';

const BlockedModal = ({active, setActive, setBlocked}) => {
  const [text, setText] = useState('');

  return (
    <Background active={active} onClick={() => setActive(false)}>
      <Container onClick={(event) => event.stopPropagation()}>
        <Row>
          <Space />
          <Title>Заблокировать пользователя</Title>
          <Image src={cross} alt="cross" onClick={() => setActive(false)}/>
        </Row>
        <Textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder={'Опишите причину блокировки ...'}
        />
        <Button
          disabled={!text.length}
          onClick={() => {
            setActive(false);
            setBlocked({status: true, text})
          }}>
          Заблокировать
        </Button>
      </Container>
    </Background>
  );
};

export default BlockedModal;