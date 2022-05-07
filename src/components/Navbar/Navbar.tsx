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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
} from "@chakra-ui/react";
import { userLogout } from "../../store/user-action";
import { HamburgerIcon } from "@chakra-ui/icons";
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

  const hamburgerMenuOnSmallDevice = (
    <Menu>
      <MenuButton
        w="5vh"
        h="5vh"
        color="white"
        marginRight="0.5rem"
        marginTop="0.5rem"
        padding={0}
        as={HamburgerIcon}
      />

      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );

  const lgNavbar = (
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
  );

  return (
    <Box
      h="10vh"
      width="100%"
      bgGradient="linear(to-r, orange.300, orange.400)"
    >
      <UnorderedList height="100%" styleType="none">
        <Flex height="100%" justifyContent="center" alignItems="center">
          <ListItem color="white">
            <Heading fontSize="4rem">
              <Link to="/">Recipemaster</Link>
            </Heading>
          </ListItem>
          <Spacer />

          {!isSmallScreen && lgNavbar}
          {isSmallScreen && hamburgerMenuOnSmallDevice}
        </Flex>
      </UnorderedList>
    </Box>
  );
};

export default Navbar;
