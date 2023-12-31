import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'googleABeeZee';
  }
`;

export default GlobalStyle;
