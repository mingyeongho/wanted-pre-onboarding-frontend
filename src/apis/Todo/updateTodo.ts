import axios from "axios";
import { API_URL } from "../../utils/constant";
import Storage from "../../utils/Storage";

interface Props {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const updateTodo = async ({ id, todo, isCompleted }: Props) => {
  const URL = API_URL.BaseUrl + API_URL.UpdateTodoUrl(id.toString());
  const payload = {
    todo,
    isCompleted,
  };
  const Config = {
    headers: {
      Authorization: `Bearer ${Storage.getStorage({ key: "user" })}`,
    },
  };
  const res = await axios.put(URL, payload, Config);

  return res;
};

export default updateTodo;
