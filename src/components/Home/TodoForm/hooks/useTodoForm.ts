import React, { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import createTodo from "../../../../apis/Todo/createTodo";
import { InputProps, LabelProps } from "../../../../utils/interface";

const useTodoForm = (setRefresh: React.Dispatch<SetStateAction<number>>) => {
  const [input, setInput] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSave = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await createTodo({ todo: input });
      if (res.status === 201) {
        console.log("Todo를 생성했습니다.");
        setRefresh((prev) => prev + 1);
      }
    } catch (e) {
      console.error(e);
    }
    setInput("");
  };

  const todoLabelProps: LabelProps = {
    children: "Todo",
    htmlFor: "todo",
  };

  const todoInputProps: InputProps = {
    value: input,
    onChange,
    placeholder: "Todo를 입력해주세요.",
    type: "text",
    name: "todo",
    id: "todo",
  };

  return { todoLabelProps, todoInputProps, onSave };
};

export default useTodoForm;
