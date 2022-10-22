import { AppContainer } from "./components/styled/AppContainer.style";

// import GlobalStyle from "./components/styled/GlobalStyle.style";
import { Circle, Navbar, NavPadding } from "./components/styled/Navbar.style";
import pokeLogo from "./components/images/logo.png";
import Main from "./components/Main";
import Spinner from "react-bootstrap/Spinner";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const POKEMON_AMOUNT = 12;

  const getPokemons = async (amount) => {
    const pokimans = [];
    const startingPokemon = Math.floor(Math.random() * 155);
    for (let i = 0; i < amount; i++) {
      const data = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${startingPokemon + i}`)
        .then((res) => {
          const id = res.data.id;
          const name = res.data.name[0].toUpperCase() + res.data.name.slice(1);
          const pic = res.data.sprites.front_default;
          pokimans.push({ id, name, pic });
          // setPokemons((prev) => ({
          //   pokemons: [
          //     ...prev.pokemons,

          //     {
          //       id: res.data.id,
          //       pic: res.data.sprites.front_default,
          //       name: res.data.name.toUpperCase(),
          //     },
          //   ],
          // }));
        })

        .catch((e) => console.log("ERROR: invalid fetch url"));
    }
    setLoading(true);
    return pokimans;
  };
  useEffect(() => {
    const loadPokemons = async () => {
      setPokemons(shuffleArray(await getPokemons(POKEMON_AMOUNT)));
    };
    loadPokemons();
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <AppContainer>
      <Navbar>
        <img src={pokeLogo} alt="pokemon memory game" />
      </Navbar>
      <NavPadding>
        <Circle size="60px">
          <Circle size="40px" />
        </Circle>
      </NavPadding>

      {loading ? (
        <Main props={pokemons} setClickedPokemons={setClickedPokemons} />
      ) : (
        <Spinner animation="border" variant="danger"></Spinner>
      )}
    </AppContainer>
  );
}

export default App;
