import styled from "styled-components";

const Card = (pokemon) => {
  const handleClick = (e) => {
    const clickedArray = [];
    console.log(e.target);
    const id = e.target.id;
    const name = e.target.alt;
    clickedArray.push({ id, name });
    pokemon.setClickedPokemons((prev) => [...prev, ...clickedArray]);
  };
  return (
    <CardWrapper onClick={handleClick}>
      <img src={pokemon.pic} alt={pokemon.name} id={pokemon.id}></img>
      <h6>{pokemon.name}</h6>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex-basis: auto; */
  width: 120px;
  gap: 3rem;

  margin: 1rem;
  border: 2px solid gray;
  min-width: 0;
  border-radius: 1rem;
  transition: all 0.3s;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    background-color: #ef0e3d;
  }
  & img {
    border: 1px double gray;
    /* border-style: ; */
    border-radius: 5px;
    margin: 12px;
  }
`;
export default Card;
