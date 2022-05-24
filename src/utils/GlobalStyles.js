import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  /* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
}
body {
    background-color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.textGrey};

}
a{
    text-decoration: none;
    cursor: pointer;
}

h1 {
  font-size: 1.7rem;
}

h1, h2 {
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 900;
}
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    flex-direction: row;
  } ;
`;

export default GlobalStyle;
