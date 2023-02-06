import { ChangeEvent } from "react";

export interface InputProps {
  type: "text" | "password";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  id: string;
}

export interface LabelProps {
  children: string;
  htmlFor: string;
}
