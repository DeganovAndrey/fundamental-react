import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div style={{ maxWidth: 800, marginLeft: 270 }}>
      <h1>Page for login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton>Enter</MyButton>
      </form>
    </div>
  );
};

export default Login;
