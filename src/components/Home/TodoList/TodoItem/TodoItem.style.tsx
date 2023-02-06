import styled from "styled-components";
import { Palette } from "../../../../styles/Variable";

export const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TodoItem = styled.label`
  flex: 1;
  display: flex;
  gap: 10px;
`;

export const Complete = styled.input`
  &:checked {
    & + span {
      text-decoration: line-through;
    }
  }
`;

export const Content = styled.span`
  flex: 1;
  font-size: 1.125rem;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 10px;
  font-size: 1rem;
  background-color: ${Palette.accent};
  color: white;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 6px;
  letter-spacing: 1px;
  border-radius: 10px;
  font-size: 1rem;
`;

export const EditForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;
