import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    color: #ffffff;
    background: #171A21;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  }

  p {
    margin: 0;
  }
`;
