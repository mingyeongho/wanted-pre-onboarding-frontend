interface Props {
  email: string;
  password: string;
}

const isValid = ({ email, password }: Props) => {
  if (email.includes("@") && password.length > 7) {
    return true;
  }
  return false;
};

export default isValid;
