import styled from 'styled-components';


export const Page = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: blue;
`;

export const Head = styled.div`
  width: 600px;
  height: 500px;
  background: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 3px solid #333;
  border-radius: 70px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;

  &::before {
    content: '';
    width: 80px;
    height: 140px;
    border-radius: 50%;
    background: white;
    margin-bottom: 75%;
    border-left: 3px solid #333;
  }

  &::after {
    content: '';
    width: 80px;
    height: 140px;
    border-radius: 50%;
    background: white;
    margin-bottom: 75%;
    border-right: 3px solid #333;
  }
`;

export const Face = styled.div`
  width: 450px;
  height: 320px;
  border-radius: 50%;
  border: 3px solid #000;
  background: #f8ddce;
  display: flex;
  justify-content: space-around;
  position: relative;
  box-shadow: inset 10px -5px 5px #ddc2b0;
`;

export const Eye = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #000;
  border: 3px solid #000;
  margin-top: 70px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::after {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #fff; 
    position: absolute;
    top: -24px;
    left: -10px;
    content: "";
    animation: shake .1s infinite ease-in-out alternate;
  }

  &::before {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff; 
    position: absolute;
    bottom: -20px;
    right: 0px;
    content: "";
    animation: shake .1s infinite ease-in-out alternate;
  }

  @keyframes shake {
    0%   {transform: translateX(-1px)}
    100% {transform: translateX(1px)}
  }
`;

export const Mouth = styled.div`
  width: 180px;
  height: 40px;
  border-radius: 50%;
  background: #000;
  border: 2px solid #000;
  position: absolute;
  bottom: 60px;
  left: 125px;
  overflow: hidden;
`;

export const TLeft = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  position: absolute;

  top: -10px;
  left: 30px;
`;

export const TCenter = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  position: absolute;

  top: -15px;
  left: 75px;
`;

export const TRight = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  position: absolute;

  top: -10px;
  right: 30px;
`;

export const Tongue = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 50%;
  background: #ea6e74;
  position: absolute;
  bottom: 50px;
  position: absolute;
  bottom: -20px;
  right: 40px;
`;

export const CLeft = styled.div`
  width: 30px;
  height: 60px;
  border-radius: 50%;
  background: #f8ddce;
  position: absolute;
  bottom: 50px;

  border-right: 2px solid #000;
  left: 123px;
  transform: rotate(10deg);
  box-shadow: inset -5px 1px 2px #ddc2b0;
`;

export const CRight = styled.div`
  width: 30px;
  height: 60px;
  border-radius: 50%;
  background: #f8ddce;
  position: absolute;
  bottom: 50px;

  border-left: 2px solid #000;
  right: 123px;
  transform: rotate(-10deg);
  box-shadow: inset 5px 1px 2px #ddc2b0;
`;