import {
  Box,
  Center,
  Heading,
  FormControl,
  Grid,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import Register from "../../images/Register.jpg";

interface funcProps {
  isLoginForm: boolean;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  setName?: (val: string) => void;
}

const AuthForm: React.FC<funcProps> = (props) => {
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: (val: string) => void
  ) => {
    setValue(e.target.value);
  };
  return (
    <Box height="100vh" width="100%" backgroundImage={Register}>
      <Center height="100%">
        <form onSubmit={props.onSubmitHandler}>
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
                {!props.isLoginForm && (
                  <Input
                    key="name"
                    name="username"
                    placeholder="Type your username"
                    onChange={(e) => onInputChange(e, props.setName!)}
                    marginBottom="1rem"
                  />
                )}

                <Input
                  key="email"
                  name="email"
                  placeholder="Type your email"
                  onChange={(e) => onInputChange(e, props.setEmail)}
                  marginBottom="1rem"
                />
                <Input
                  key="password"
                  name="password"
                  type="password"
                  placeholder="Type your password"
                  onChange={(e) => onInputChange(e, props.setPassword)}
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

                <Text>
                  Do you have an account?{" "}
                  <Text as="span" color="orange.200" fontWeight="700">
                    <Link to="/login">Login!</Link>
                  </Text>
                </Text>
              </Grid>
            </FormControl>
          </Box>
        </form>
      </Center>
    </Box>
  );
};

export default AuthForm;
