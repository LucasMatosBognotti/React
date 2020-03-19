import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Form/input';

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const formRef = useRef(null);

  async function handleSubmit({ email, password }, { reset }) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email('Insira um email válido').required('O email é Obrigatorio'),
        password: Yup.string().required('A senha é Obrigatorio'),
      });

      await schema.validate({ email, password }, {
        abortEarly: false,
      });

      dispatch(signInRequest(email, password));

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
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />

        <button type="submit">{loading ? 'Carregando....' : 'Acessar'}</button>

      <Link to="/register">Nao tenho cadastro</Link>

    </Form>
  );
}