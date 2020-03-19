import { createGlobalStyle } from 'styled-components';

import img from '../assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: url(${img});
    background-size: cover;
    background-repeat: no-repeat;

    -webkit-font-smoothing: antialiased !important;
  }
`;