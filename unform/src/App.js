import React from 'react';
import { Form } from '@unform/web';

import Input from './components/Form/input';

export default function App() {

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" />
        <Input name="password" type="password" />

        <button type="submit"> Login </button>
      </Form>
    </div>
  );
}