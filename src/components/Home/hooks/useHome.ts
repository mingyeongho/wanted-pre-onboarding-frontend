import { useEffect, useState } from "react";
import getTodos from "../../../apis/Todo/getTodos";
import { TodoType } from "../../../utils/type";

const useHome = () => {
  const [todos, setTodos] = useState<TodoType[]>();
  const [refresh, setRefresh] = useState(0);

  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      if (res.status === 200) {
        setTodos(res.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    (async () => await fetchTodos())();
  }, [refresh]);

  return { todos, setRefresh };
};

export default useHome;
