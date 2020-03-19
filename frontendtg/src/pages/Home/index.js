import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';

import Avatar from '../Avatar';

import { Container } from './styles';

export default function Home() {
  //const { dado, setDado } = useState([]);

  async function handleSubmit(data) {
    console.log(data);
    const response = await api.put('/user', {
      data,
    });

    console.log(response);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <Avatar />

        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" /> 
      
        <hr />

        <Input name="oldPassword" type="password" placeholder="Sua senha Atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input name="confirmPassword" type="password" placeholder="Confirmação de senha" />

        <button type="submit"> Atualizar Perfil </button>
      </Form>
    </Container>
  );
}