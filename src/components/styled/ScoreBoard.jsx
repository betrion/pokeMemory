import styled from "styled-components";

export const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <ScoreBoardWrapper>
      <p>
        Current Score: <span>{currentScore}</span>{" "}
      </p>
      <p>
        Best Score: <span>{bestScore}</span>
      </p>
    </ScoreBoardWrapper>
  );
};

const ScoreBoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* max-width: 50%; */
  box-sizing: border-box;
  font-size: large;
  margin-left: auto;
  gap: 5rem;
  margin-right: auto;
  border: 1px solid #7fc411;
  background-color: #7fc41181;
  border-radius: 5%;

  padding: 0.5rem 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 1rem;
  }

  & span {
    background-color: yellow;
    border: 2px solid #3968b7;
    font-size: 2rem;
    padding: 0 10px;
    border-radius: 20%;
    /* margin: 1rem; */
    display: inline-block;
  }
`;
