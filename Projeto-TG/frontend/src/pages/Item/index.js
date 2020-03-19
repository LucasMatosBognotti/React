import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { itemRequest } from '../../store/modules/item/actions';

import { Container, Form } from './styles';
import Input from '../../components/Form/input';

export default function Item() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleSubmit({ name, description }, { reset }) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é 0brigatorio'),
        description: Yup.string().required('A descrição é obrigatorio'),
      });

      await schema.validate({ name, description }, {
        abortEarly: false,
      });

      dispatch(itemRequest(name, description));
      
      reset();
    } catch(err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>

        <Input name="name" type="text" placeholder="Nome do Item" />
        <Input name="description" type="text" placeholder="Descrição do Item" />

        <button type="submit">Enviar Item</button>

        <Link to="/list">Voltar</Link>
      </Form>
    </Container>
  );
}