import axios from "axios";
import { API_URL } from "../../utils/constant";

interface Props {
  email: string;
  password: string;
}

const signin = async ({ email, password }: Props) => {
  const URL = API_URL.BaseUrl + API_URL.SigninUrl;
  const payload = { email, password };
  const Config = {
    headers: { "Content-Type": "application/json" },
  };
  const res = await axios.post(URL, payload, Config);

  return res;
};

export default signin;
