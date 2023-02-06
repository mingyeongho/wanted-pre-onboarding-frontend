import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getTodos from "../../../apis/Todo/getTodos";
import Storage from "../../../utils/Storage";
import { TodoType } from "../../../utils/type";

const useHome = () => {
  const navigate = useNavigate();
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

  const onLogout = () => {
    Storage.removeStorage({ key: "user" });
    navigate("/signin");
  };

  useEffect(() => {
    (async () => await fetchTodos())();
  }, [refresh]);

  return { todos, setRefresh, onLogout };
};

export default useHome;
