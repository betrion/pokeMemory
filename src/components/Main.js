import { CardGrid } from "./styled/CardGrid";
import Card from "./styled/Card.style";
import "bootstrap/dist/css/bootstrap.min.css";
const Main = (props) => {
  const pokemonCards = props.props.map((pokemon) => (
    <Card
      key={Math.random()}
      name={pokemon.name}
      pic={pokemon.pic}
      id={pokemon.id}
      setClickedPokemons={props.setClickedPokemons}
    />
  ));
  return (
    <div>
      <CardGrid>{pokemonCards}</CardGrid>
    </div>
  );
};

export default Main;
