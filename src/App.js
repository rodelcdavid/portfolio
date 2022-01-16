import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Loading from "./components/Loading";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import GlobalStyle, { Wrapper } from "./utils/GlobalStyles";
import theme from "./utils/theme";
// import { Navbar, About, Projects, Contact, Footer } from "./components/index";
function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!loaded ? (
        <Loading />
      ) : (
        <Wrapper>
          <Profile />
          <Projects id="projects" />
        </Wrapper>
      )}
    </ThemeProvider>
  );
}

export default App;
