import { CardGrid } from "./styled/CardGrid";
import Card from "./styled/Card.style";
import "bootstrap/dist/css/bootstrap.min.css";
const Main = ({ ...pokemon }) => {
  console.log(pokemon);
  // const pokemonCards = pokemons.map((pokemon) => (
  //   <Card key={pokemon.id} name={pokemon.name} pic={pokemon.pic} />
  // ));
  return (
    <div>
      <CardGrid>
        <Card />
        <Card /> <Card /> <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardGrid>
    </div>
  );
};

export default Main;
