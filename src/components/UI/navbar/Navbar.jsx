import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbar__links}>
        <NavLink to="about">About</NavLink>
        <NavLink to="posts">Posts</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
