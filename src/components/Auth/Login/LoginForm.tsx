import React from "react";
import { useState } from "react";
import { userLogin } from "../../../store/user-action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AuthForm from "../AuthForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
    Navigate("/");
  };

  return (
    <AuthForm
      isLoginForm={true}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default LoginForm;
