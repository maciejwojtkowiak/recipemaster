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

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: Function
  ) => {
    setValue(e.target.value);
  };

  return (
    <Box height="100vh" width="100%" backgroundImage={Register}>
      <Center height="100%">
        <form onSubmit={onSubmitHandler}>
          <Box
            borderRadius="5rem"
            backgroundColor="white"
            paddingTop="5rem"
            paddingBottom="5rem"
            paddingX="2rem"
          >
            <Center marginBottom="3rem">
              <Heading fontSize="4rem">RecipeMaster</Heading>
            </Center>

            <FormControl w="20vw">
              <Grid placeItems="center">
                <Input
                  key="name"
                  name="username"
                  placeholder="Type your username"
                  onChange={(e) => {
                    changeHandler(e, setUsername);
                  }}
                  marginBottom="1rem"
                />
                <Input
                  key="email"
                  name="email"
                  placeholder="Type your email"
                  onChange={(e) => {
                    changeHandler(e, setEmail);
                  }}
                  marginBottom="1rem"
                />
                <Input
                  key="password"
                  name="password"
                  type="password"
                  placeholder="Type your password"
                  onChange={(e) => {
                    changeHandler(e, setPassword);
                  }}
                  marginBottom="1rem"
                />
                <Button
                  bgColor="orange.300"
                  fontSize="1.5rem"
                  color="white"
                  type="submit"
                  paddingY="1.5rem"
                  marginBottom="1.5rem"
                  _hover={{
                    bgColor: "#FBD38D",
                  }}
                >
                  Register
                </Button>
                <Link to="/login">
                  <Text>
                    Do you have an account?{" "}
                    <Text as="span" color="orange.200" fontWeight="700">
                      Login!
                    </Text>
                  </Text>
                </Link>
              </Grid>
            </FormControl>
          </Box>
        </form>
      </Center>
    </Box>
  );
};

export default RegisterForm;
