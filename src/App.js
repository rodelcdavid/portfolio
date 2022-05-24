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

  useEffect(() => {
    //how long spinner is displayed before fadeout starts
    setTimeout(() => {
      setDisplaySpinner(false);
    }, 2000);

    //displayspinner + fadeout duration - white blink fix = total loading animation
    //2000ms + 1000ms - 100ms = 2900ms
    setTimeout(() => {
      setLoaded(true);
    }, 2900);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {!loaded && <Loading displaySpinner={displaySpinner} />}

      <Wrapper>
        <Profile />
        <Projects />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
