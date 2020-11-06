import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #210000;
    --color-background-light-1: #2e1f1f;
    --color-background-light-2: #393434;
    --color-background-light-3: #645959;
    --color-primary: #ec1f24;
    --color-primary-dark-1: #ba1b23;
    --color-secundary: #fff;
    --color-secundary-dark-1: #ddd;
    --color-error: #c00;
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
