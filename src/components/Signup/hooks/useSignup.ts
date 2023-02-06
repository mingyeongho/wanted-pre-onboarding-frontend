import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../../../apis/Auth/signup";
import isValid from "../../../function/isValid";
import { InputProps, LabelProps } from "../../../utils/interface";

interface ValidInputProps extends InputProps {
  valid: "correct" | "incorrect";
}

const useSignup = () => {
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

  const onSignup = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signup({ email, password });
      if (res.status === 201) {
        console.log(`Welcome ${email}`);
        navigate("/signin");
      }
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  const emailLabelProps: LabelProps = {
    children: "Email",
    htmlFor: "email",
  };

  const emailInputProps: ValidInputProps = {
    value: email,
    onChange,
    placeholder: "@가 포함되어야 합니다.",
    name: "email",
    id: "email",
    type: "text",
    valid: email.includes("@") ? "correct" : "incorrect",
  };

  const passwordLabelProps: LabelProps = {
    children: "Password",
    htmlFor: "password",
  };

  const passwordInputProps: ValidInputProps = {
    value: password,
    onChange,
    placeholder: "8자 이상 입력해주세요.",
    name: "password",
    id: "password",
    type: "password",
    valid: password.length > 7 ? "correct" : "incorrect",
  };

  const signupButtonProps = {
    children: isLoading ? "Loading..." : "회원가입",
    disabled: !isValid({ email, password }),
  };

  return {
    emailLabelProps,
    emailInputProps,
    passwordLabelProps,
    passwordInputProps,
    signupButtonProps,
    onSignup,
  };
};

export default useSignup;
