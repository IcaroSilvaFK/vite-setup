import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    height: 100vh;
  }
  input,button{
    border: 0;
    outline:0;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;
