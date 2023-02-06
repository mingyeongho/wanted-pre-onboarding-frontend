import axios from "axios";
import { API_URL } from "../../utils/constant";

interface Props {
  email: string;
  password: string;
}

const signup = async ({ email, password }: Props) => {
  const URL = API_URL.BaseUrl + API_URL.SignupUrl;
  const payload = { email, password };
  const Config = {
    headers: { "Content-Type": "application/json" },
  };
  const res = await axios.post(URL, payload, Config);

  return res;
};

export default signup;
