import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  border: 1px solid magenta;
  color: magenta;
  background-color: ${(props) => props.backgroundColor};
`;

export const ButtonLabel = styled.label`
  background-color: blue;
  font-family: "PokeFont";
  &:hover {
    background-color: black;
  }
`;
