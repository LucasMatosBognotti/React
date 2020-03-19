import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Mushroom = styled.div`
  width: 550px;
  height: 550px;
  position: absolute;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: -40px;
`;

export const Brain = styled.div`
  width: 100%;
  height: 460px; 
  background-color: #ccc;
  position: absolute;
  z-index: 1;
  overflow: hidden;

  border-top-left-radius: 280px 290px;
  border-top-right-radius: 280px 290px;

  border-bottom-left-radius: 200px 180px;
  border-bottom-right-radius: 200px 180px;

  background: -webkit-radial-gradient(left top, #e00000, #8b0101);
  box-shadow: inset 0 -150px 100px rgba(0, 0, 0, 0.3);
  animation: change 5s infinite ease-in-out alternate;

  @keyframes change {
    0% {
      background: -webkit-radial-gradient(left top, #e00000, #8b0101);
    }
    25% {
      background: -webkit-radial-gradient(left top, #307CBF, #102940);
    }
    50% {
      background: -webkit-radial-gradient(left top, #A419C2, #360840);
    }
    100% {
      background: -webkit-radial-gradient(left top, #29C264, #0D4021);
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 110%;
    right: -10px;
    position: absolute;
    bottom: -30px;
    box-shadow: inset -47px 12px 44px 20px rgba(0, 0, 0, 0.12);
    border-radius: 50%;
  }

  &::after {
    content: '';
    width: 130%;
    height: 100%;
    position: absolute;
    left: -50%;
    margin-left: 35%;
    bottom: -11px;
    box-shadow: inset 0 -110px 84px 11px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }

`;

export const Mark = styled.div`
  width: 273px;
  height: 266px;
  background: #fcfcfcfc;
  background: -webkit-linear-gradient(top, #fcfcfc 0%, #f5f5f5 100%);
  position: absolute;

  border-radius: 50%;
  box-shadow: 2px 0px 1px rgba(0, 0, 0, 0.2), inset 2px 0 1px #fff;

  top: 50px;
  left: 50%;
  margin-left: -136px;

  &::before {
    content: '';
    width: 273px;
    height: 266px;
    background: #fcfcfcfc;
    background: -webkit-linear-gradient(top, #fcfcfc 0%, #f5f5f5 100%);
    position: absolute;

    border-radius: 50%;
    box-shadow: 2px 0px 1px rgba(0, 0, 0, 0.2), inset 2px 0 1px #fff;
    
    left: -340px;
    top: 20px;
    
  }

  &::after {
    content: '';
    width: 273px;
    height: 266px;
    background: #fcfcfcfc;
    background: -webkit-linear-gradient(top, #fcfcfc 0%, #f5f5f5 100%);
    position: absolute;

    border-radius: 50%;
    box-shadow: 2px 0px 1px rgba(0, 0, 0, 0.2), inset 2px 0 1px #fff;
    
    left: 340px;
    top: 20px;
  }

`;


export const Head = styled.div`
  width: 340px;
  height: 193px;
  background-color: #ddd;
  position: absolute;
  z-index: 9;
  overflow: hidden;

  margin-top: 65%;

  border-top-left-radius: 895px 355px;
  border-top-right-radius: 895px 355px;

  border-bottom-left-radius: 1200px;
  border-bottom-right-radius: 1200px;

  background: -webkit-linear-gradient(left top, #ffdd86, #907c4a);
  box-shadow: inset -30px -29px 40px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;

    box-shadow: inset -4px -35px 9px -11px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    
    box-shadow: inset 0 34px 44px 2px rgba(0, 0, 0, 0.2);
    
    border-top-left-radius: 895px 355px;
    border-top-right-radius: 895px 355px;

    border-bottom-left-radius: 1200px;
    border-bottom-right-radius: 1200px;
  }
`;

export const EyeLeft = styled.div`
  width: 30px;
  height: 84px;
  background-color: black;
  position: absolute;
  top: 30px;
  -webkit-border-radius: 50px;
  box-shadow: inset 0 0 30px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  &::before {
    content: '';
    width: 20px;
    height: 30px;
    background-color:white;
    position: absolute;
    border-radius: 50px;
    left: 5px;
    top: 10px;
    filter: blur(2px);
  }

  left:80px;
`;

export const EyeRight = styled.div`
  width: 30px;
  height: 84px;
  background-color: black;
  position: absolute;
  top: 30px;
  -webkit-border-radius: 50px;
  box-shadow: inset 0 0 30px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  &::before {
    content: '';
    width: 20px;
    height: 30px;
    background-color:white;
    position: absolute;
    border-radius: 50px;
    left: 5px;
    top: 10px;
    filter: blur(2px);
  }

  right:80px;
`;