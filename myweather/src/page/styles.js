import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  margin: 50px auto;
  padding: 30px;
  background: transparent;

  h1 {
    color: #fff;
    text-transform: uppercase;
  }
`;

export const Content = styled.div`
  form {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    
    input {
      flex: 1;
      border: none;
      padding: 10px 15px;
      margin: 0 10px 0 10px;
      border-radius: 4px;
      background: transparent; 
      font-size: 16px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      outline: none;
    }
    
    button {
      border: 0;
      padding: 0 15px;
      border-radius: 4px;
      margin-left: 10px;
      background: orange;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      outline: 0;
      cursor: pointer;
    }
  }
`;

export const Result = styled.div`
  max-width: 700px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 50px;
    padding-top: 10px;
    color: #fff;
  }
`;