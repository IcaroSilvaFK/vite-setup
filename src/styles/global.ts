import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body,#root{
    width: 100%;
    height: 100vh;

    font-size: 1rem;
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
  ul,ol{
    list-style: none;
  }
`;
