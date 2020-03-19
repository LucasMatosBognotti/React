import styled from 'styled-components';
import fall from '../../img/fall.jpg';

export const Page = styled.div`
  height: 100%;
  background-image: url(${fall});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  padding: 40px 20px 40px 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: 5rem;
    letter-spacing: 1px;
    margin-bottom: 5rem;
    color: white;
    font-weight: lighter;
  }

  svg {
    margin-right: 10px;
  }
`;


export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 100%;
    height: 44px;
    border: 0;
    border-radius: 4px;
    padding: 0 15px;
    margin: 0 0 10px;
    color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.3);
    outline-color: black;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 44px;
  font-size: 16px;
  margin-top: 30px;
  color: #fff;
  background: rgba(24, 23, 23, 0.726);
  border: 0;
  border-radius: 4px;
  transition: .5s;

  &:hover {
    background: rgb(0, 0, 0, 0.800);
    box-shadow: -5px 5px 10px 0 rgba(0, 0, 0, 0.4);
	  transition: .5s;
  }
`;