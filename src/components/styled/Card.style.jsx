import styled from "styled-components";

const Card = (pokemon) => {
  return (
    <CardWrapper>
      <img src={pokemon.pic} alt="poke" id={pokemon.id}></img>
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
