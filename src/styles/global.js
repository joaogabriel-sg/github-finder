import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body, 
  #root {
    height: 100vh;
    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts};
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
  }

  #root {
    background: ${({ theme }) => theme.colors.primary};
    transition: background 0.3s;
  } 

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
  }

  ul,
  li {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
