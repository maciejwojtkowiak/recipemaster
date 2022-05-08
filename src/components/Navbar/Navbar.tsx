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
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import React, { useRef, useState } from "react";
import { recipeAction } from "../../store/recipe-slice";
import Bookmark from "./Bookmark";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isSmallScreen] = useMediaQuery("(max-width: 48em)");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isBlured, setIsBlured] = useState<boolean>(false);

  const [inputForSmallDevicesIsShown, setInputForSmallDevicesIsShown] =
    useState<boolean>(false);
  const isLoggedIn = useSelector((state: RootState) => state.ui.isLoggedIn);
  const onLogoutHandler = () => {
    dispatch(userLogout());
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(recipeAction.setFilterTitle(e.target.value));
  };

  const onSearchClickSmallDevice = () => {
    setIsFocused((prevFocus) => !prevFocus);
  };

  const onInputBlur = () => {
    setIsFocused(false);
  };

  const hamburgerMenuOnSmallDevice = (
    <React.Fragment>
      <Flex justifyContent="center" alignItems="center" gap="1rem">
        <Bookmark />

        <Menu>
          <MenuButton
            w="5vh"
            h="5vh"
            color="white"
            marginRight="0.5rem"
            padding={0}
            as={HamburgerIcon}
          />

          <MenuList>
            <MenuItem>
              <Link to="/addRecipe">Add recipe</Link>
            </MenuItem>
            <MenuItem>
              <Button onClick={onSearchClickSmallDevice}>Search Recipe</Button>
            </MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </React.Fragment>
  );

  const lgNavbar = (
    <React.Fragment>
      <Input
        bgColor="white"
        placeholder="Find a recipe"
        width="30%"
        onChange={onChangeHandler}
      />
      <Spacer />
      <Flex
        alignItems="center"
        justifyContent="center"
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
    <Box h="10vh" bgGradient="linear(to-r, orange.300, orange.400)">
      <UnorderedList height="100%" styleType="none">
        <Flex height="100%" alignItems="center">
          <ListItem color="white">
            <Heading fontSize={{ base: "3rem", lg: "4rem" }}>
              <Link to="/">Recipemaster</Link>
            </Heading>
          </ListItem>
          <Spacer />

          {!isSmallScreen && lgNavbar}
          {isSmallScreen && hamburgerMenuOnSmallDevice}
        </Flex>
      </UnorderedList>
      {isFocused && (
        <Input
          onChange={onChangeHandler}
          placeholder="search recipe"
          borderRadius="0%"
          border="none"
          borderBottom="1px"
          borderBottomColor="orange.300"
          bgColor="white"
          bgGradient="none"
          onBlur={onInputBlur}
        />
      )}
    </Box>
  );
};

export default Navbar;
