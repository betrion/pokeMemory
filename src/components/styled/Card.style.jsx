import styled from "styled-components";

const Card = ({ pokemon }) => {
  return (
    <CardWrapper>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
        alt="poke"
      ></img>
      <h5>Charizard</h5>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  margin: 1rem;
  border: 2px solid gray;
  border-radius: 1rem;
  transition: all 0.6s;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  & img {
    width: 96px;
  }
`;
export default Card;
