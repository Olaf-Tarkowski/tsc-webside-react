import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-color: #fff;
  margin: auto;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
}
`;
