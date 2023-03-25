import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UserSignUpForm from "./UserSignUpForm";
import cl from "../../styles/User.module.css";
import { toggleForm } from "../../features/user/userSlice";
import UserLoginForm from "./UserLoginForm";
import { toggleFormType } from "../../features/user/userSlice";

const UserForm = () => {
  const { showForm, formType } = useSelector(({ user }) => user);

  const dispatch = useDispatch();
  const closeForm = () => dispatch(toggleForm(false));

  const toggleFormOfType = (type) => dispatch(toggleFormType(type));

  return (
    <>
      {showForm ? (
        <>
          <div className={cl.overlay} onClick={closeForm} />

          {formType === "signup" ? (
            <UserSignUpForm
              toggleFormType={toggleFormOfType}
              closeForm={closeForm}
            />
          ) : (
            <UserLoginForm
              toggleFormType={toggleFormOfType}
              closeForm={closeForm}
            />
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default UserForm;
