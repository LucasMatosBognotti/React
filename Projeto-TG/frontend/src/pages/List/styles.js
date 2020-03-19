import styled from 'styled-components';

export const Plus = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  img {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      opacity: 0.5;
    }
  }
  
`; 

export const Container = styled.div`
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
	justify-content: space-around;
	min-width: 700px;
  margin: 50px auto;
  padding: 10px;
  background: cyan;
  border-radius: 10px;
`;

export const Img = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const Descri = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: blue;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;