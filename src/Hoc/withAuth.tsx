import { ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "../pages/Home";
import SigninPage from "../pages/Signin";
import Storage from "../utils/Storage";

const withAuth = (Component: ComponentType) => (props: any) => {
  const currentUser = Storage.getStorage({ key: "user" });
  const navigate = useNavigate();

  if (!currentUser) {
    return <SigninPage />;
  }

  return <HomePage />;
};

export default withAuth;
