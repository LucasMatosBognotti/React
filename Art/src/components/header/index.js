import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, Container } from './styles';

export default function Header() {
  return (
    <Menu>
      <Container>
        <nav>
          <ul>
            <li><Link to="/">BayMax</Link></li>
            <li><Link to="/mush">MushRoom</Link></li>
            <li><Link to="/finn">Finn</Link></li>
            <li><Link to="/bb8">BB-8</Link></li>
          </ul>
        </nav>
      </Container>
    </Menu>
  );
}