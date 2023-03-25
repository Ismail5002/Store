import React from "react";
import cl from "../../styles/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

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

    dispatch(updateUser(values));
  };

  React.useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);
  return (
    <section className={cl.profile}>
      {!currentUser ? (
        <span>You should login</span>
      ) : (
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
          <button onClick={handleSubmit} className={cl.submit}>
            Update
          </button>
        </form>
      )}
    </section>
  );
};

export default Profile;
