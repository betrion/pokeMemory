import { AppContainer } from "./components/styled/AppContainer.style";

// import GlobalStyle from "./components/styled/GlobalStyle.style";
import { Circle, Navbar, NavPadding } from "./components/styled/Navbar.style";
import pokeLogo from "./components/images/logo.png";
import Main from "./components/Main";
import Spinner from "react-bootstrap/Spinner";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(false);
  const POKEMON_AMOUNT = 3;
  const getPokemons = async (amount) => {
    const data = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${amount}`)
      .then((res) => {
        console.log(res.data);
        setPokemons((prev) => ({
          ...prev,
          pokemon: {
            id: res.data.id,
            pic: res.data.sprites.front_default,
            name: res.data.name,
          },
        }));
      })
      .catch((e) => console.log("ERROR: invalid fetch url"));
    setLoading(true);
  };
  useEffect(() => {
    for (let i = 1; i <= POKEMON_AMOUNT; i++) {
      getPokemons(i);
    }
  }, []);

  return (
    <AppContainer>
      {/* <GlobalStyle /> */}
      <Navbar>
        <img src={pokeLogo} alt="pokemon memory game" />
      </Navbar>
      <NavPadding>
        <Circle size="60px">
          <Circle size="40px" />
        </Circle>
      </NavPadding>
      <Spinner animation="border" variant="danger"></Spinner>
      <Main {...pokemons} />
    </AppContainer>
  );
}

export default App;
