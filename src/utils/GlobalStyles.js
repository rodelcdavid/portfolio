import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
${
  "" /* html{
    scroll-behavior: smooth;
} */
}
body {
    background-color: #e5e5e5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
a{
    color: #000;
    text-decoration: none;
}

`;

export default GlobalStyle;

export const ContainerWhite = styled.div`
  width: 100%;

  background-color: #f6f5f5;
  padding: 1rem 2rem;

  @media (min-width: 960px) {
    padding: 1rem 8rem;
  }
`;

export const ContainerColored = styled.div``;
