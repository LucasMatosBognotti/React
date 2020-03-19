import styled from 'styled-components';

export const Page = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica, sans-serif;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 867px;
  margin: 25px 10px;
  height: calc(100% - 50px);
  border: 2px solid #ddd;
  border-radius: 5px;
  background: #eee;
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  flex-direction: row-reverse;
`;

export const Img = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background: #ddd;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

export const Bubble = styled.div`
  max-width: 450px;
  padding: 15px;
  border-radius: 20px;
  background: #579ffb;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Name = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;

export const Time = styled.div`
  font-size: 15px;
`;

export const Text = styled.div``;

export const Form = styled.form`
  display: flex;
  padding: 10px;
  border-top: solid 2px #ddd;
  background: #eee;

  input {
    flex: 1;
    background: #ddd;
    padding: 10px;
    border: none;
    border-radius: 3px;
    font-size: 1em; 
  }

  button {
    margin-left: 10px;
    background: rgb(0, 196, 65);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.23s;
    padding: 10px;
    border: none;
    border-radius: 3px;
    font-size: 15px; 

    &:hover {
      background: rgb(0, 180, 50)
    }
  }

`;