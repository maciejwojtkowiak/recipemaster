import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RecipeHeart from "./RecipeHeart";

import { useDispatch, useSelector } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import { getRecipeImage } from "../../Helpers/getRecipeImage";
import { uiAction } from "../../store/ui-slice";
import { RootState } from "../../store/store";

type listedRecipe = {
  id: number;
  username: string;
  title: string;
  type: string;
  time: string;
  description: string;
};

const RecipeItem: React.FC<listedRecipe> = (props) => {
  const dispatch = useDispatch();

  const recipeIsLiked = useSelector(
    (state: RootState) =>
      state.recipe.recipes.find((recipe) => recipe.id === props.id)?.isLiked
  );
  const onLikeHandler = () => {
    if (recipeIsLiked) {
      dispatch(recipeAction.deleteLikedRecipe(props.id));
      dispatch(
        uiAction.setNotification({
          type: "message",
          isShown: true,
          message: "Item was removed from favorites",
        })
      );
      return;
    }

    dispatch(recipeAction.addLikedRecipe(props.id));
    dispatch(
      uiAction.setNotification({
        type: "message",
        isShown: true,
        message: "Item was added to favorites",
      })
    );
  };
  let imgName = getRecipeImage(props.type);

  return (
    <Box
      height={{ sm: "50vh", lg: "40vh" }}
      width="40vh"
      borderWidth="1px"
      marginTop="2rem"
      paddingBottom="1rem"
    >
      <Box position="relative">
        <RecipeHeart onLikeHandler={onLikeHandler} isLiked={recipeIsLiked} />
        <Image height="20vh" width="100%" src={imgName}></Image>
      </Box>
      <Box marginLeft="1rem" marginTop="1rem" overflow="hidden">
        <Flex>
          <Text fontSize="1.6rem" fontWeight="700">
            {props.title}
          </Text>
        </Flex>
        <Text fontSize="0.8rem">
          Type:{" "}
          <Text as="span" fontSize="1.1rem">
            {props.type}
          </Text>
        </Text>
        <Text fontSize="0.8rem">
          Author:{" "}
          <Text as="span" fontSize="1.1rem">
            {props.username}
          </Text>
        </Text>

        <Text fontSize="0.8rem" as="span">
          Time:{" "}
          <Text as="span" fontSize="1.1rem">
            {props.time}
          </Text>
        </Text>
      </Box>
      <Link to={`/${props.id}`}>
        <Box textAlign="right" marginRight="2rem">
          <Button
            variant="solid"
            color="white"
            _hover={{ bg: "orange.300" }}
            transition="none"
            bgGradient="linear(to-r, orange.300, orange.400)"
          >
            Go
          </Button>
        </Box>
      </Link>
    </Box>
  );
};

export default RecipeItem;
