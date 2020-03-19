import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Carter+One&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    font-family: 'Carter One', cursive;
    -webkit-font-smoothing: antialiased !important;
    overflow-y: hidden;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
`;