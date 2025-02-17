import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className={s.navbar}>
      <MyButton onClick={logOut}>Out</MyButton>
      <div className={s.navbar__links}>
        <NavLink to="about">About</NavLink>
        <NavLink to="posts">Posts</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
