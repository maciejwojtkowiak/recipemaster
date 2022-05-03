import React from "react";
import LoginForm from "../components/Auth/Login/LoginForm";
import PageAnimationWrapper from "../components/wrappers/PageAnimationWrapper";

const Login = () => {
  return (
    <PageAnimationWrapper>
      <LoginForm />
    </PageAnimationWrapper>
  );
};

export default Login;
