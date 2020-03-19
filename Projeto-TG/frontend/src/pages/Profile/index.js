import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { Container ,Form } from './styles';
import Input from '../../components/Form/input';
import Avatar from '../../components/Avatar';

export default function Profile() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.tron.log(data);
  }
  
  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <Avatar />

        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Email" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Sua senha Atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input name="confirmPassword" type="password" placeholder="Confirmação de senha" />

        <button type="submit"> Atualizar Perfil </button>

      </Form>
      <button type="button" onClick={handleSignOut} > Sair do LostAndFound </button>
    </Container>
  );
}