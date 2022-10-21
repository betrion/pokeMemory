import styled from "styled-components";
import Card from "./Card.style";

export const CardGrid = () => {
  return (
    <CardGridWrapper>
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
    </CardGridWrapper>
  );
};

const CardGridWrapper = styled.div`
  display: grid;
  width: 70vw;
  box-sizing: border-box;
  outline: 1px solid red;
  /* margin-left: auto; */
  /* margin-right: auto; */
  margin: auto;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
