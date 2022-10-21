import styled from "styled-components";

// export const CardGrid = () => {
//   return <CardGridWrapper></CardGridWrapper>;
// };

export const CardGrid = styled.div`
  display: grid;
  width: 70vw;
  box-sizing: border-box;
  /* border: 1px solid red; */
  margin-left: auto;
  margin-right: auto;
  /* margin: auto; */

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
