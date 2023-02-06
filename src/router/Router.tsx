import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";
import SigninPage from "../pages/Signin";
import SignupPage from "../pages/Signup";

const Router = () => {
  return (
    <Routes>
      <Route path="/todo" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
