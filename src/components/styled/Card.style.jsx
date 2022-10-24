import styled from "styled-components";

const Card = ({ pic, name, id, setClickedPokemons, handlePokemonClick }) => {
  // const handleClick = (e) => {
  //   const clickedArray = [];
  //   console.log(e.target);
  //   const id = e.target.id;
  //   const name = e.target.alt;
  //   clickedArray.push({ id, name });
  //   setClickedPokemons((prev) => [...prev, ...clickedArray]);
  // };
  return (
    <CardWrapper onClick={handlePokemonClick}>
      <img src={pic} alt={name} id={id}></img>
      <h6>{name}</h6>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex-basis: auto; */
  width: 12vw;
  gap: 1rem;

  margin: 1rem;
  padding: 0 3rem;
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
    width: 9vw;
    border: 1px double gray;
    /* border-style: ; */
    border-radius: 5px;
    margin: 1rem;
  }
`;
export default Card;
