import { CardGrid } from "./styled/CardGrid";
import Card from "./styled/Card.style";
import "bootstrap/dist/css/bootstrap.min.css";
const Main = ({ pokemons, setClickedPokemons, handlePokemonClick }) => {
  const pokemonCards = pokemons.map((pokemon) => (
    <Card
      key={Math.random()}
      name={pokemon.name}
      pic={pokemon.pic}
      id={pokemon.id}
      {...{ setClickedPokemons, handlePokemonClick }}
    />
  ));
  return (
    <div>
      <CardGrid>{pokemonCards}</CardGrid>
    </div>
  );
};

export default Main;
