import React from "react";
import cl from "../../styles/User.module.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userSlice";

const UserSignUpForm = ({ closeForm, toggleFormType }) => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(values));
    closeForm();
  };
  return (
    <div className={cl.wrapper}>
      <div onClick={closeForm} className={cl.close}>
        <svg className={cl["icon-fav"]}>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className={cl.title}>Sign Up</div>
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
            type="name"
            name="name"
            placeholder="Your name"
            value={values.name}
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
        <div className={cl.group}>
          <input
            type="avatar"
            name="avatar"
            placeholder="Your avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div onClick={() => toggleFormType("login")} className={cl.link}>
          I already have an account
        </div>
        <button onClick={handleSubmit} className={cl.submit} type="submit">
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignUpForm;
