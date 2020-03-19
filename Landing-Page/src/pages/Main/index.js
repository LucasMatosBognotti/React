import React from 'react';

import {Page, Container, Form, SubmitButton } from './styles';

export default function Main() {
  return(
    <Page>
      <Container>
        <h1>Login</h1>

        <Form onSubmit={() => {}}>
          <input type="text" placeholder="Enter Username"/>

          <input type="password" placeholder="Enter Password"/>

          <SubmitButton disabled>
            Login
          </SubmitButton>
        </Form>
      </Container>
    </Page>
  );
}