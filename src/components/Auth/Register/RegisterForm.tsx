import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  Button,
  Grid,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";
import { userSignUp } from "../../../store/user-action";
import { useDispatch } from "react-redux";
import Register from "../../../images/Register.jpg";
import { uiAction } from "../../../store/ui-slice";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid((username.length && email.length && password.length) > 0);
  }, [username, email, password]);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid) {
      dispatch(userSignUp(username, email, password));
      dispatch(
        uiAction.setNotification({
          isShown: true,
          type: "message",
          message: "Account was created!",
        })
      );
      navigate("/");
    }
    if (!isValid) {
      dispatch(
        uiAction.setNotification({
          type: "error",
          message: "Some input must be empty",
          isShown: true,
        })
      );
    }
  };

  return (
    <AuthForm
      isLoginForm={false}
      onSubmitHandler={onSubmitHandler}
      setEmail={setEmail}
      setPassword={setPassword}
      setName={setUsername}
    />
  );
};

export default RegisterForm;
