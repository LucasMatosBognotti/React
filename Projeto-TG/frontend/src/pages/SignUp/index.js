import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signUpRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Form/input';


export default function Home() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleSubmit({ name, email, password }, { reset }) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é Obrigatorio'),
        email: Yup.string().email('Insira um email válido').required('O email é Obrigatorio'),
        password: Yup.string().required('A senha é Obrigatorio'),
      });

      await schema.validate({ name, email, password }, {
        abortEarly: false,
      });

     dispatch(signUpRequest(email, email, password));

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
      <Input name="name" type="text" placeholder="Nome" />
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />

      <button type="submit">SignUp</button>

      <Link to="/">Ja tenho cadastro</Link>
    </Form>
  );
}