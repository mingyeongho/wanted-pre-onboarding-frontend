import styled from "styled-components";
import { Palette } from "../../styles/Variable";

export const Home = styled.main`
  gap: 20px;
`;

export const TodoListContainer = styled.div`
  border: 2px solid ${Palette.accent};
  padding: 10px;
  border-radius: 20px;
`;

export const Logout = styled.button`
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 10px;
  font-size: 0.875rem;
  background-color: ${Palette.accent};
  color: white;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
  }
`;
