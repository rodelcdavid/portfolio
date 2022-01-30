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
    background-color: #e5e5e5;
    font-family: 'Ubuntu', sans-serif;
    color: #525f7f;

}
a{
    text-decoration: none;
    cursor: pointer;
}

h1, h2 {
  font-family: 'Roboto Slab';
  font-weight: 900;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1020px) {
    flex-direction: row;
  } ;
`;

export default GlobalStyle;
