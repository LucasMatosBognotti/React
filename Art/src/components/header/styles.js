import styled from 'styled-components';

export const Menu = styled.div`
  width:100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  nav ul{
    display: flex;
  }

  nav ul li {
    padding: 20px;
  }

  nav ul li a {
    font-size: 2.0rem;
    text-transform: uppercase;
    padding: 20px;
  }

  nav ul li a:hover {
    background: orange;
    border-radius: 10px;
    transition: 1s;
  }
`;