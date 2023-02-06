import { ChangeEvent } from "react";
import { TodoListProps } from "../../../utils/interface";
import TodoItem from "./TodoItem/TodoItem";
import * as S from "./TodoList.style";

const TodoList = ({ todos, setRefresh }: TodoListProps) => {
  return (
    <S.TodoList>
      {todos.map((item, idx) => {
        return <TodoItem key={idx} item={item} setRefresh={setRefresh} />;
      })}
    </S.TodoList>
  );
};

export default TodoList;
