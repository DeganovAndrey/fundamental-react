import s from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button className={s.myBtn} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
