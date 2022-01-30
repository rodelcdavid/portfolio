import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Loading from "./components/Loading";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import GlobalStyle, { Wrapper } from "./utils/GlobalStyles";
import theme from "./utils/theme";
function App() {
  const [loaded, setLoaded] = useState(false);
  const [displaySpinner, setDisplaySpinner] = useState(true);

  //displaySpinner = animation delay
  //displayspinner + animation - 100ms = total loading
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2900);

    setTimeout(() => {
      setDisplaySpinner(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {!loaded && <Loading displaySpinner={displaySpinner} />}

      <Wrapper>
        <Profile />
        <Projects setLoaded={setLoaded} id="projects" />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
