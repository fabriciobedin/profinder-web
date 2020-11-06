import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #21222C;
    --color-background-light-1: #282A36;
    --color-background-light-2: #343746;
    --color-background-light-3: #555664;
    --color-primary: #FF9000;
    --color-primary-dark-1: #D77400;
    --color-secundary: #fff;
    --color-secundary-dark-1: #ddd;
    --color-error: #E90000;
    --color-success: #0c0;
    --color-warning: #fb0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-background);
    color: var(--color-secundary);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
