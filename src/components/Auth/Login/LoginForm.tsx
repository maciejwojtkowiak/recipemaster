import React from "react";
import { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  Button,
  Grid,
  Text,
  Center,
  Heading,
} from "@chakra-ui/react";
import { userLogin } from "../../../store/user-action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Register from "../../../images/Register.jpg";
import AuthForm from "../AuthForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: (val: string) => void
  ) => {
    setValue(e.target.value);
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
