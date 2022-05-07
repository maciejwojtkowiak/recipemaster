import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Box,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { recipeAction } from "../../store/recipe-slice";
import React from "react";
import { getRecipeImage } from "../../Helpers/getRecipeImage";
import { uiAction } from "../../store/ui-slice";

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
    dispatch(
      uiAction.setNotification({
        message: "Item was unliked",
        type: "DELETE",
        isShown: true,
      })
    );
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
          color="white"
          _hover={{ bg: "none" }}
          _expanded={{ bg: "none" }}
          _focus={{ boxShadow: "none" }}
          _active={{ bg: "none" }}
          icon={<Icon as={FiBookmark} w={8} h={8} />}
        />
        <MenuList>
          {likedItems.map((recipe) => (
            <React.Fragment>
              <Box
                key={recipe.id}
                margin="1rem"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mW="10vw"
              >
                <Link to={`/${recipe.id}`}>
                  <Box
                    display="flex"
                    width="8vw"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Image
                      src={`${getRecipeImage(recipe.type)}`}
                      boxSize="3rem"
                      objectFit="cover"
                      borderRadius="full"
                    />
                    <Text
                      color="black"
                      display="inline-block"
                      marginLeft="1rem"
                      overflow="hidden"
                    >
                      {recipe.title}
                    </Text>
                  </Box>
                </Link>
                <Grid placeItems="center">
                  <Button
                    marginLeft="1rem"
                    color="black"
                    display="inline-block"
                    onClick={(e) => {
                      onDeleteHandler(e, recipe.id);
                    }}
                  >
                    <Icon as={AiOutlineClose}></Icon>
                  </Button>
                </Grid>
              </Box>
            </React.Fragment>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Bookmark;
