import React from "react";
import cl from "../../styles/User.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const UserLoginForm = ({ closeForm, toggleFormType }) => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(values));
    closeForm();
  };
  return (
    <div className={cl.wrapper}>
      <div onClick={closeForm} className={cl.close}>
        <svg className={cl["icon-fav"]}>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className={cl.title}>Log in</div>
      <form className={cl.form}>
        <div className={cl.group}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={values.email}
            autoComplete="off"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className={cl.group}>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={values.password}
            autoComplete="off"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>

        <div onClick={() => toggleFormType("signup")} className={cl.link}>
          Create an account
        </div>
        <button onClick={handleSubmit} className={cl.submit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
