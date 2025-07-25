import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-blue: #3877ee;
    --color-dark-blue: #42567a;
    --color-iris: #5d5fef;
    --color-dark-blue-10: rgb(66, 86, 122, 0.1);
    --color-grey: #303e58;
    --color-light-grey: #f4f5f9;
    --color-purple: #ef5da8;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "PT Sans", sans-serif;
    color: var(--color-dark-blue);

    height: 100vh;
  }

  #root {
    height: 100%;
  }

  button {
    font: inherit;
    color: inherit;
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  button:focus {
    outline: 2px solid var(--color-blue);
    outline-offset: -1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
