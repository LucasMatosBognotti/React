import React from 'react';

import { Container } from './styles';

export default function Avatar() {

  async function handleChange(e) {

    const { name } = e.target.files[0];

    console.log({
      name,
    });
    
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img src={'https://api.adorable.io/avatars/50/abott@adorable.png' } alt="Avatar" />

        <input type="file" id="avatar" accept="image/*" onChange={handleChange} />
      </label>
    </Container>
  );
}