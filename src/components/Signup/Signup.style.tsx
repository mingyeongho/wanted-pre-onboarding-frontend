import styled from "styled-components";
import { Palette } from "../../styles/Variable";

export const Signup = styled.main`
  flex-direction: column;
  gap: 10px;
`;

export const Form = styled.form`
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

export const Input = styled.input<{ valid: "correct" | "incorrect" }>`
  outline: none;
  padding: 14px;
  letter-spacing: 1px;
  border-radius: 10px;
  font-size: 1.125rem;
  border: 3px solid ${(props) => (props.valid === "correct" ? "green" : "red")};
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

  &:disabled {
    background-color: #555;
    cursor: no-drop;
  }
`;

export const GoSignin = styled.span`
  font-size: 0.875rem;
  transition: 0.3s all;
  &:hover {
    color: ${Palette.accent};
  }
`;
