import axios from "axios";
import { API_URL } from "../../utils/constant";
import Storage from "../../utils/Storage";

interface Props {
  id: number;
}

const deleteTodo = async ({ id }: Props) => {
  const URL = API_URL.BaseUrl + API_URL.DeleteTodoUrl(id.toString());
  const Config = {
    headers: {
      Authorization: `Bearer ${Storage.getStorage({ key: "user" })}`,
    },
  };
  const res = await axios.delete(URL, Config);

  return res;
};

export default deleteTodo;
