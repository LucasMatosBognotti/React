import styled from 'styled-components';


export const Page = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #bf0302;
`;

export const Baymax = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  box-shadow: -20px 20px rgba(0, 0, 0, 0.2);
  background: linear-gradient(45deg, #bfbfbf 0%, #fefefe 100%);
  cursor: pointer;

  display: flex;
  align-items: center;

  position: absolute;  

  &::after {
    content: '';
    width: 85%;
    height: 85%;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    right: 10px;
    top: 10px;
    position: absolute;
  }
`; 

export const Left = styled.div`
  width: 80px;
  height: 80px;
  background-color: black;
  border-radius: 50%;
  box-shadow: 0px 2px rgba(255, 255, 255, 0.7);
  
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50px;

  z-index: 9;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #bfbfbf;

    position: absolute;
    top: -100%;
    transition: all 0.6s ease-in-out;
    animation: pisk 1s infinite ease-in-out alternate;
    animation-iteration-count: infinite;
    
  }
`;

export const Right = styled.div`
  width: 80px;
  height: 80px;
  background-color: black;
  border-radius: 50%;
  box-shadow: 0px 2px rgba(255, 255, 255, 0.7);
  
  overflow: hidden;
  position: absolute;
  top: 50%;
  right: 50px;

  z-index: 9;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #bfbfbf;

    position: absolute;
    top: -100%;
    transition: all 0.6s ease-in-out;
    animation: pisk 1s infinite ease-in-out alternate;
    animation-iteration-count: infinite;
  }
  @keyframes pisk {
    0% {
      top: 0;
    }
    100% {
      top: 80%;
    }
  }
`;

export const Line = styled.div`
  width: 350px;
  height: 10px;
  background-color: black;
  
  position: absolute;
  top: 50%;
  margin-top: 40px;
  left: 55px;
  z-index: 8;
`;