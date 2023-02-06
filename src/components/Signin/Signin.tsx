import { Link } from "react-router-dom";
import useSignin from "./hooks/useSignin";
import * as S from "./Signin.style";

const Signin = () => {
  const {
    emailLabelProps,
    emailInputProps,
    passwordLabelProps,
    passwordInputProps,
    signinButtonProps,
    onSignin,
  } = useSignin();

  return (
    <S.Signin>
      <S.Form onSubmit={onSignin}>
        <S.InputContainer>
          <S.Label {...emailLabelProps} />
          <S.Input data-testid="email-input" {...emailInputProps} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...passwordLabelProps} />
          <S.Input data-testid="password-input" {...passwordInputProps} />
        </S.InputContainer>
        <S.Button data-testid="signin-button" {...signinButtonProps} />
      </S.Form>
      <Link
        to={"/signup"}
        children={<S.GoSignup children="회원가입 하러가기" />}
      />
    </S.Signin>
  );
};

export default Signin;
