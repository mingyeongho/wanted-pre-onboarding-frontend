import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import withAuth from "./Hoc/withAuth";
import Router from "./router/Router";
import Storage from "./utils/Storage";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = Storage.getStorage({ key: "user" });
    if (currentUser) {
      navigate("/todo");
    } else {
      navigate("/signin");
    }
  }, []);

  return <Router />;
}

export default App;
