import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    text-decoration: none;
    list-style: none;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin: 0;
  }
`;

export default GlobalStyle;