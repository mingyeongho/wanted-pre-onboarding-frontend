import axios from "axios";
import { API_URL } from "../../utils/constant";
import Storage from "../../utils/Storage";

const getTodos = async () => {
  const URL = API_URL.BaseUrl + API_URL.GetTodosUrl;
  const Config = {
    headers: {
      Authorization: `Bearer ${Storage.getStorage({ key: "user" })}`,
    },
  };
  const res = await axios.get(URL, Config);

  return res;
};

export default getTodos;
