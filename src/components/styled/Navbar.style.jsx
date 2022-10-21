import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #ef0e3d;
  & img {
    width: 30rem;
    padding: 2rem;
  }
`;

export const NavPadding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: #383838;
  /* padding: 5px; */
  margin-bottom: 2rem;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border: 6px solid #383838;
  border-radius: 50%;
  background-color: white;
`;
