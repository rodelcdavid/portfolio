import Details from "./components/Details";
import Projects from "./components/Projects";
import GlobalStyle, { Wrapper } from "./utils/GlobalStyles";
// import { Navbar, About, Projects, Contact, Footer } from "./components/index";
function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Details />
        <Projects />
      </Wrapper>
    </>
  );
}

export default App;
