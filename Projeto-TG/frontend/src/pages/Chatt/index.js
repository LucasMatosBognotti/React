import React from 'react';

import { Page, Container, Content, Left, Right, Img, Bubble, Info, Name, Time, Text, Form } from './styles';

export default function Chat() {
  return (
    <Page>
    <Container>
      <Content>

        <Left>
          <Img> <img src={'https://image.flaticon.com/icons/svg/327/327779.svg'} alt="id"/> </Img>

          <Bubble>
            <Info>
              <Name>BOT</Name>
              <Time>12:45</Time>
            </Info>
            <Text>Hi, welcome to SimpleChat! Go ahead and send me a message.</Text>
          </Bubble>
        </Left>

        <Right>
          <Img> <img src={'https://image.flaticon.com/icons/svg/145/145867.svg'} alt="id"/> </Img>

          <Bubble>
            <Info>
              <Name>Lucas</Name>
              <Time>12:46</Time>
            </Info>
            <Text>You can change your name in Js sextion!</Text>
          </Bubble>
        </Right>

      </Content>

      <Form>
        <input type="text" placeholder="Enter your message..." />
        <button type="submit">send</button>
      </Form>
    </Container>
    </Page>
  );
}