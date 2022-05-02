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
import { userLogin } from "../../store/user-action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Register from "../../images/Register.jpg";

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
                  marginY="1.5rem"
                  _hover={{
                    bgColor: "#FBD38D",
                  }}
                >
                  Login
                </Button>
              </Grid>
            </FormControl>
          </Box>
        </form>
      </Center>
    </Box>
  );
};

export default LoginForm;
