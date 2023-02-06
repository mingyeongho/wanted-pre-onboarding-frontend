import * as S from "./Home.style";
import useHome from "./hooks/useHome";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

const Home = () => {
  const { todos, setRefresh } = useHome();

  return (
    <S.Home>
      <TodoForm setRefresh={setRefresh} />
      <S.TodoListContainer>
        {todos && todos.length > 0 ? (
          <TodoList todos={todos} setRefresh={setRefresh} />
        ) : (
          <span>Todo가 없습니다.</span>
        )}
      </S.TodoListContainer>
    </S.Home>
  );
};

export default Home;
