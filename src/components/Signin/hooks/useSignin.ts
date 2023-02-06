import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import signin from "../../../apis/Auth/signin";
import isValid from "../../../function/isValid";
import { InputProps, LabelProps } from "../../../utils/interface";
import Storage from "../../../utils/Storage";

const useSignin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInpus] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInpus((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSignin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signin({ email, password });
      if (res.status === 200) {
        Storage.setStorage({ key: "user", value: res.data.access_token });
        console.log(res.data);
      }
      navigate("/todo");
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  const emailLabelProps: LabelProps = {
    children: "Email",
    htmlFor: "email",
  };

  const emailInputProps: InputProps = {
    value: email,
    onChange,
    placeholder: "@가 포함되어야 합니다.",
    name: "email",
    id: "email",
    type: "text",
  };

  const passwordLabelProps: LabelProps = {
    children: "Password",
    htmlFor: "password",
  };

  const passwordInputProps: InputProps = {
    value: password,
    onChange,
    placeholder: "8자 이상 입력해주세요.",
    name: "password",
    id: "password",
    type: "password",
  };

  const signinButtonProps = {
    children: isLoading ? "Loading..." : "로그인",
    disabled: !isValid({ email, password }),
  };

  return {
    emailLabelProps,
    emailInputProps,
    passwordLabelProps,
    passwordInputProps,
    signinButtonProps,
    onSignin,
  };
};

export default useSignin;
