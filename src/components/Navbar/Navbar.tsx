import { Link } from "react-router-dom";
import {
  Box,
  UnorderedList,
  ListItem,
  Flex,
  Spacer,
  Input,
  Button,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import { userLogout } from "../../store/user-action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import React from "react";
import { recipeAction } from "../../store/recipe-slice";
import Bookmark from "./Bookmark";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isSmallScreen] = useMediaQuery("(max-width: 48em)");
  const isLoggedIn = useSelector((state: RootState) => state.ui.isLoggedIn);
  const onLogoutHandler = () => {
    dispatch(userLogout());
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(recipeAction.setFilterTitle(e.target.value));
  };

  // Zrób hamburger menu

  const hamburgerMenuOnSmallDevice = 

  return (
    <Box
      h="10vh"
      width="100%"
      bgGradient="linear(to-r, orange.300, orange.400)"
    >
      <UnorderedList height="100%" styleType="none">
        <Flex height="100%" justifyContent="center" alignItems="center">
          <ListItem fontSize="2rem" color="white">
            <Heading fontSize="4rem">
              <Link to="/">Recipemaster</Link>
            </Heading>
          </ListItem>
          <Spacer />
          <ListItem>
            <Input
              width="30rem"
              placeholder="Let`s find a recipe!"
              backgroundColor="white"
              type="text"
              onChange={onChangeHandler}
            />
          </ListItem>
          {!isSmallScreen && (
            <React.Fragment>
              <Spacer />
              <Flex
                alignItems="center"
                height="100%"
                gap="2rem"
                color="white"
                fontSize="1.2rem"
                paddingRight="2rem"
              >
                <Bookmark />
                <ListItem>
                  <Link to="/addRecipe">add recipe</Link>
                </ListItem>
                {!isLoggedIn && (
                  <Link to="/register">
                    <ListItem>Register</ListItem>
                  </Link>
                )}
                {isLoggedIn && (
                  <ListItem>
                    <Button onClick={onLogoutHandler}>Logout</Button>
                  </ListItem>
                )}
              </Flex>
            </React.Fragment>
          )}
        </Flex>
      </UnorderedList>
    </Box>
  );
};

export default Navbar;
