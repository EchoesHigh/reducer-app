import React from "react";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useDispatch } from "./hooks/useDispatch";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./styles/globalStyles";
import { useDarkMode } from "./hooks/useDarkMode";

const Container = styled.div``;

const App = () => {
  const [state, dispatch] = useDispatch();
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyle />
        <Header state={state} dispatch={dispatch} theme={theme} toggleTheme={toggleTheme} />
        <Contacts state={state} dispatch={dispatch} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
