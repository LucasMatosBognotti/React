import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/lost.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo"/>
          <Link to="/list" >LIST ITEM</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Lucas Matos</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={'https://api.adorable.io/avatars/50/abott@adorable.png'} alt="Profile"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}