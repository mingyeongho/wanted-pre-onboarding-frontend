import axios from "axios";
import { API_URL } from "../../utils/constant";
import Storage from "../../utils/Storage";

interface Props {
  todo: string;
}

const createTodo = async ({ todo }: Props) => {
  const URL = API_URL.BaseUrl + API_URL.CreateTodoUrl;
  const payload = {
    todo,
  };
  const Config = {
    headers: {
      Authorization: `Bearer ${Storage.getStorage({ key: "user" })}`,
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post(URL, payload, Config);

  return res;
};

export default createTodo;
