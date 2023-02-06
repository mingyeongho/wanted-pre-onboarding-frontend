import styled from "styled-components";
import { Palette } from "../../../styles/Variable";

export const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  color: ${Palette.accent};
  font-size: 1.5rem;
  font-weight: bolder;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 14px;
  letter-spacing: 1px;
  border-radius: 10px;
  font-size: 1.125rem;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 10px;
  font-size: 1.25rem;
  background-color: ${Palette.accent};
  color: white;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
  }
`;
