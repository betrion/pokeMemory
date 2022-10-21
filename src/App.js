import { AppContainer } from "./components/styled/AppContainer.style";

import GlobalStyle from "./components/styled/GlobalStyle.style";
import { Circle, Navbar, NavPadding } from "./components/styled/Navbar.style";
import pokeLogo from "./components/images/logo.png";
import Main from "./components/Main";
function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar>
        <img src={pokeLogo} alt="pokemon memory game" />
      </Navbar>
      <NavPadding>
        <Circle size="60px">
          <Circle size="40px" />
        </Circle>
      </NavPadding>
      <Main />
    </AppContainer>
  );
}

export default App;
