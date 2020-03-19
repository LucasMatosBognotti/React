import React from 'react';

import { Container } from './styles';

export default function Avatar() {
  return (
    <Container>
      <label htmlFor="avatar">
        <img src={'https://api.adorable.io/avatars/50/abott@adorable.png' } alt="Avatar" />

        <input type="file" id="avatar" accept="image/*" />
      </label>
    </Container>
  );
}