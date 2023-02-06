import React, { ChangeEvent, SetStateAction } from "react";
import { TodoType } from "./type";

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

export interface TodoListProps {
  todos: TodoType[];
  setRefresh: React.Dispatch<SetStateAction<number>>;
}

export interface TodoItemProps {
  item: TodoType;
  setRefresh: React.Dispatch<SetStateAction<number>>;
}

export interface TodoFormProps {
  setRefresh: React.Dispatch<SetStateAction<number>>;
}
