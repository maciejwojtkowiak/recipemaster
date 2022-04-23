import React from "react";
import { useState } from "react";
import { Box, Input, FormControl, Button, Grid } from "@chakra-ui/react";
import { userSignUp } from "../../store/user-action";
import { useDispatch } from "react-redux";
import Register from "../../images/Register.jpg";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userSignUp(username, email, password));
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: Function
  ) => {
    setValue(e.target.value);
  };

  return (
    <Box height="100vh" width="100%" backgroundImage={Register}>
      <Grid height="100%" placeItems="center">
        <form onSubmit={onSubmitHandler}>
          <Box>
            <FormControl border="1px" paddingY="10rem" paddingX="5rem">
              <Grid placeItems="center">
                <Input
                  name="username"
                  placeholder="Type your username"
                  onChange={(e) => {
                    changeHandler(e, setUsername);
                  }}
                  marginBottom="1rem"
                />
                <Input
                  name="email"
                  placeholder="Type your email"
                  onChange={(e) => {
                    changeHandler(e, setEmail);
                  }}
                  marginBottom="1rem"
                />
                <Input
                  name="password"
                  placeholder="Type your password"
                  onChange={(e) => {
                    changeHandler(e, setPassword);
                  }}
                  marginBottom="1rem"
                />
                <Button type="submit">Register</Button>
              </Grid>
            </FormControl>
          </Box>
        </form>
      </Grid>
    </Box>
  );
};

export default RegisterForm;
