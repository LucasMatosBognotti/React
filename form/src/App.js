import React, { useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import * as Yup from 'yup';


import Input from './components/Form/input';

function App() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é Obrigadorio'),
        email: Yup.string().email('Digite um e-mail válido').required('O email é obrigatório'),
        address: Yup.object().shape({
          state: Yup.string().max(2, 'No Maximo 2 caracteres').required('O estado é obrigatorio')
        })
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

      formRef.current.setErrors({});

      reset();

    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  //buscar os dados da API e preencher o form
  useEffect(() => {
    setTimeout(()=> {
      formRef.current.setData({
        name: 'Lucas Matos Bognotti',
        email: 'lucasmatosbognotti@gmail.com',
        address: {
          city: 'Franca',
          state: 'SP',
        }
      })
    }, 2000);
  },[]);

  return (
    <div className="App">
     <h1>Hello World</h1>

     <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" type="text" />
        <Input name="email" type="email" />
        <Input name="password" type="password" />

        <Scope path="address">
          <Input name="street" type="text" />
          <Input name="neighborhood" type="text" />
          <Input name="city" type="text" />
          <Input name="state" type="text" />
          <Input name="number" type="text" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
