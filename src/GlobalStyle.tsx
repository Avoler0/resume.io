import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin: 0;
  }
`;

export default GlobalStyle;