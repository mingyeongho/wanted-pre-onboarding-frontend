import { Link } from "react-router-dom";
import useSignup from "./hooks/useSignup";
import * as S from "./Signup.style";

const Signup = () => {
  const {
    emailLabelProps,
    emailInputProps,
    passwordLabelProps,
    passwordInputProps,
    signupButtonProps,
    onSignup,
  } = useSignup();

  return (
    <S.Signup>
      <S.Form onSubmit={onSignup}>
        <S.InputContainer>
          <S.Label {...emailLabelProps} />
          <S.Input data-testid="email-input" {...emailInputProps} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...passwordLabelProps} />
          <S.Input data-testid="password-input" {...passwordInputProps} />
        </S.InputContainer>
        <S.Button data-testid="signup-button" {...signupButtonProps} />
      </S.Form>
      <Link
        to={"/signin"}
        children={<S.GoSignin children="로그인 하러가기" />}
      />
    </S.Signup>
  );
};

export default Signup;
