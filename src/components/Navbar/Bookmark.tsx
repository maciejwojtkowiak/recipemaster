import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { recipeAction } from "../../store/recipe-slice";
import React from "react";

const Bookmark = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector(
    (state: RootState) => state.recipe.likedRecipes.recipes
  );
  const totalAmount = useSelector(
    (state: RootState) => state.recipe.likedRecipes.totalAmount
  );
  const onDeleteHandler = (e: React.FormEvent, id: number) => {
    dispatch(recipeAction.deleteLikedRecipe(id));
  };

  return (
    <Box position="relative">
      <Menu>
        <Text
          position="absolute"
          top="0%"
          right="0%"
          bg="white"
          borderRadius="50%"
          fontSize="0.8rem"
          color="black"
          paddingLeft="0.4rem"
          paddingRight="0.4rem"
          fontWeight="700"
          zIndex="10"
        >
          {totalAmount}
        </Text>
        <MenuButton
          background="none"
          as={IconButton}
          borderRadius="md"
          borderWidth="0px"
          _hover={{ bg: "none" }}
          _expanded={{ bg: "none" }}
          _focus={{ boxShadow: "none" }}
          _active={{ bg: "none" }}
          icon={<Icon as={FiBookmark} w={8} h={8} />}
        />
        <MenuList>
          {likedItems.map((recipe) => (
            <Box
              key={recipe.id}
              margin="1rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text color="black" display="inline-block">
                <Link to="/addRecipe">{recipe.title}</Link>
              </Text>
              <Button
                color="black"
                display="inline-block"
                onClick={(e) => {
                  onDeleteHandler(e, recipe.id);
                }}
              >
                <Icon as={AiOutlineClose}></Icon>
              </Button>
            </Box>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Bookmark;
