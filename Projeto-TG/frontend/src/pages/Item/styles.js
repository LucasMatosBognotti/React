import styled from 'styled-components';
import { darken } from 'polished';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  max-width: 600px;
  margin: 200px auto;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    margin: 0 0 10px;
    color: #FFF;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  
  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.5s;

    &:hover {
      background:${darken(0.10, '#3b9eff')};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;
    text-align: center;

    &:hover {
      opacity: 1;
    }
  }
`;