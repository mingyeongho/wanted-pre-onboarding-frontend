import React, { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import deleteTodo from "../../../../../apis/Todo/deleteTodo";
import updateTodo from "../../../../../apis/Todo/updateTodo";
import { TodoType } from "../../../../../utils/type";

interface Props {
  item: TodoType;
  setRefresh: React.Dispatch<SetStateAction<number>>;
}

const useTodoItem = ({ item, setRefresh }: Props) => {
  const { id, isCompleted, todo } = item;
  const [editTodo, setEditTodo] = useState(item.todo);
  const [isEditMode, setIsEditMode] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  const onDelete = async () => {
    try {
      const res = await deleteTodo({ id });
      if (res.status === 204) {
        console.log("성공적으로 제거되었습니다.");
        setRefresh((prev) => prev + 1);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onEdit = () => {
    setIsEditMode(true);
  };

  const onCancel = (e: FormEvent) => {
    e.preventDefault();
    setEditTodo(item.todo);
    setIsEditMode(false);
  };

  const onSave = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await updateTodo({
        id,
        todo: editTodo,
        isCompleted,
      });
      if (res.status === 200) {
        console.log("성공적으로 수정되었습니다.");
        setIsEditMode(false);
        setRefresh((prev) => prev + 1);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onChangeChecked = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const res = await updateTodo({ id, todo, isCompleted: !isCompleted });
      if (res.status === 200) {
        console.log("성공적으로 수정되었습니다.");
        setRefresh((prev) => prev + 1);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const editInputProps = {
    value: editTodo,
    onChange,
  };

  return {
    isEditMode,
    editInputProps,
    onDelete,
    onEdit,
    onCancel,
    onSave,
    onChangeChecked,
  };
};

export default useTodoItem;
