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
} from "@chakra-ui/react";
import { userLogout } from "../../store/user-action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import React from "react";
import { recipeAction } from "../../store/recipe-slice";
import Bookmark from "./Bookmark";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.ui.isLoggedIn);
  const onLogoutHandler = () => {
    dispatch(userLogout());
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(recipeAction.filterRecipes(e.target.value));
  };

  return (
    <Box h="10vh" bgGradient="linear(to-r, orange.300, orange.400)">
      <UnorderedList height="100%" styleType="none">
        <Flex height="100%" justifyContent="center" alignItems="center">
          <ListItem fontSize="2rem" color="white">
            <Heading>
              <Link to="/">Recipemaster</Link>
            </Heading>
          </ListItem>
          <Spacer />
          <ListItem>
            <Input
              width="30rem"
              placeholder="Let`s find a recipe!"
              backgroundColor="white"
              focusBorderColor="orange.500"
              type="text"
              onChange={onChangeHandler}
            />
          </ListItem>
          <Spacer />
          <Flex
            alignItems="center"
            height="100%"
            gap="2rem"
            color="white"
            fontSize="1.2rem"
            marginRight="2rem"
          >
            <Bookmark />
            <ListItem>
              <Link to="/addRecipe">add recipe</Link>
            </ListItem>
            <ListItem>Profile</ListItem>
            {isLoggedIn && (
              <ListItem>
                <Button onClick={onLogoutHandler}>Logout</Button>
              </ListItem>
            )}
          </Flex>
        </Flex>
      </UnorderedList>
    </Box>
  );
};

export default Navbar;
