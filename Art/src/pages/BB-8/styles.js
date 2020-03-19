import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: orange; 
`;

export const B8 = styled.div`
  width: 220px;
  height: 220px;
  position: absolute;
  top: 40%;
  left: 42%;
`;

export const B8Body = styled.div`
  width: 300px;
  height: 300px;
  background: #EBF2FA;
  position: absolute;
  border-radius: 50%;
  border: solid 8px  #244356;
  overflow: hidden;
  animation: spin 1s linear infinite;

  
  @keyframes spin {
    0% {
      transform: rotate(360deg);
    }100% {
      transform: rotate(0deg);
    }
  }
  
`;

export const Dot1 = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #244356;
  position: absolute;

  top: 110px;
  left: 155px;
`;

export const Dot2 = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #244356;
  position: absolute;

  top: 185px;
  left: 55px;
`;

export const Line1 = styled.div`
  position: absolute;
  height: 8px;
  width: 100px;
  background: #244356;

  transform: rotate(55deg);
  top: 160px;
  left: 55px;
`;

export const Line2 = styled.div`
  position: absolute;
  height: 8px;
  width: 100px;
  background: #244356;

  transform: rotate(180deg);
  top: 50px;
  left: 100px;
`;

export const Line3 = styled.div`
  position: absolute;
  height: 8px;
  width: 100px;
  background: #244356;

  transform: rotate(-60deg);
  top: 150px;
  left: 170px;
`;

export const Circle1 = styled.div`
  width: 180px;
  height: 180px;
  border: 8px solid #244356;
  background-color: #FDC23E;
  border-radius: 50%;
  position: absolute;

  &::after {
    content: '';
    display: block;
    border: 8px solid #244356;
    background: #EBF2FA;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35%;
    width: 35%;
  }
  top: -30px;
  left: -51px;
`;

export const Circle2 = styled.div`
  width: 180px;
  height: 180px;
  border: 8px solid #244356;
  background-color: #FDC23E;
  border-radius: 50%;
  position: absolute;

  &::after {
    content: '';
    display: block;
    border: 8px solid #244356;
    background: #EBF2FA;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35%;
    width: 35%;
  }
  top: 182px;
  left: 90px;
`;

export const Circle3 = styled.div`
  width: 180px;
  height: 180px;
  border: 8px solid #244356;
  background-color: #FDC23E;
  border-radius: 50%;
  position: absolute;

  &::after {
    content: '';
    display: block;
    border: 8px solid #244356;
    background: #EBF2FA;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35%;
    width: 35%;
  }
  height: 300px;
  width: 300px;
  left: 200px;
  top: -100px;
`;

export const BodyShadowCrop = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  border-radius: 50%;
  border: solid 8px #244356;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;

export const BodyShadow = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0px 0px 60px rgba(0,0,0,0.4);
  left: -50px;
  top: -20px;
`;

export const B8Head = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: -75px;
  left: -30px;
  transform: rotate(-30deg);
`;

export const HeadBottom = styled.div`
  position: absolute;
  width: 100%;
  top: 100px;
`;

export const HeadSide1 = styled.div`
  border-bottom: 8px solid #244356;
  background: #A7D0E0;
  height: 20px;
  position: absolute;

  width: 35px;
  transform: rotate(40deg);
  transform-origin: bottom left;
  top: -20px;
  left: -3px;
  border-radius: 0px 0px 8px 8px;
`;

export const HeadSide2 = styled.div`
  border-bottom: 8px solid #244356;
  background: #A7D0E0;
  height: 20px;
  position: absolute;

  width: 35px;
  transform: rotate(-40deg);
  transform-origin: bottom right;
  top: -20px;
  right: -3px;
  border-radius: 0px 0px 8px 8px;
`;

export const HeadBottomBase = styled.div`
  border-bottom: 8px solid #244356;
  background: #A7D0E0;
  height: 20px;
  position: absolute;

  width: 78%;
  left: 11%;
`;

export const HeadTopCrop = styled.div`
  height: 50%;
  overflow: hidden;
  position: relative;
`;

export const HeadTop = styled.div`
  width: 200px;
  height: 200px;
  background: #EBF2FA;
  border: solid 8px #244356;
  position: absolute;
  border-radius: 50%;
  box-shadow: -10px 0px 0px 5px rgba(0,0,0,0.2) inset;
`;

export const Lens = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 8px #244356;
  background: #295A6D;
  position: absolute;
  top: 27px;
  left: 50%;
  margin-left: -28px;
  overflow: hidden;

  &::before, &::after {
    content: '';
    display: block;
    width: 6px;
    height: 70px;
    background: #2A6B80;
    position: absolute;
    left: 10px;
    top: -20px;
    transform: rotate(40deg);
  }

  &::after {
    width: 10px;
    left: 25px;
    top: -10px;
  }
`;

export const Fleckle = styled.div`
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background: #244356;
  top: 60px;
  left: 141px;
  position: absolute;
`;

export const Speedlines = styled.div`

`;

export const OneTail = styled.div`
  height: 8px;
  width: 55px;
  background: #244356;
  border-radius: 8px;
  position: absolute;

  top: -70px;
  left: 96px;

  &::after {
    content: '';
    display: block;
    height: 8px;
    width: 20px;
    border-radius: 8px;
    background: #244356;
    position: absolute;
    left: 100%;
    margin-left: 5px;
  }
`;

export const TwoTail = styled.div`
  height: 8px;
  width: 55px;
  background: #244356;
  border-radius: 8px;
  position: absolute;

  top: -27px;
  left: 148px;

  &::after {
    content: '';
    display: block;
    height: 8px;
    width: 20px;
    border-radius: 8px;
    background: #244356;
    position: absolute;
    left: 100%;
    margin-left: 5px;
  }
`;

export const Three = styled.div`
  height: 8px;
  width: 40px;
  background: #244356;
  border-radius: 8px;
  position: absolute;

  top: -13px;
  left: 144px;
`;

export const Four = styled.div`
  height: 8px;
  width: 55px;
  background: #244356;
  border-radius: 8px;
  position: absolute;

  top: 121px;
  left: 290px;
  width: 30px;
`;

export const FiveTail = styled.div`
  height: 8px;
  width: 48px;
  background: #244356;
  border-radius: 8px;
  position: absolute;

  top: 141px;
  left: 293px;
  

  &::after {
    content: '';
    display: block;
    height: 8px;
    width: 20px;
    border-radius: 8px;
    background: #244356;
    position: absolute;
    left: 100%;
    margin-left: 5px;
  }
`;

export const Ground = styled.div`
  height: 8px;
  width: 400px;
  background: #244356;
  position: absolute;
  top: 297px;
  border-radius: 8px;
`;

export const Gone = styled.div`
  left: 40px;
`;

export const BumpMove1 = styled.div`
  height: 15px;
  width: 30px;
  left: 40px;
  position: absolute;
  top: -7px;
  overflow: hidden;
  animation: move 0.5s linear infinite;

  &::after {
    content: '';
    display: block;
    height: 30px;
    width: 30px;
    border: 8px solid #244356;
    border-radius: 50%;
    background: #F5FAFC;
    box-sizing: border-box;
  }
  
  @keyframes move {
    0% {
      left: 5%;
      transform: scale(0);

    } 10% {
      transform: scale(1);
    
    } 90% {
      transform: scale(1);
    
    } 100% {
      left: 55%;
      transform: scale(0);
    }
  }
`;

