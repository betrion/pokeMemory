import styled from "styled-components";

// export const CardGrid = () => {
//   return <CardGridWrapper></CardGridWrapper>;
// };

export const CardGrid = styled.div`
  display: grid;
  width: 70vw;
  box-sizing: content-box;
  overflow-wrap: normal;
  /* border: 1px solid red; */
  /* margin-left: auto;
  margin-right: auto; */

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 870px) {
    margin: 0;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 650px) {
    margin: 0;

    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 450px) {
    margin: 0;

    grid-template-columns: repeat(2, 1fr);
  }
`;
