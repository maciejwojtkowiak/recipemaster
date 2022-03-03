import { Box, Image, Text, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import { getRecipeImage } from "../../Helpers/getRecipeImage";

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
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const onClickHandler = () => {
    if (isLiked) {
      setIsLiked(false);
      dispatch(recipeAction.deleteLikedRecipe(props.id));
      return;
    }
    setIsLiked(true);
    dispatch(recipeAction.addLikedRecipe(props.id));
  };
  let imgName = getRecipeImage(props.type);

  return (
    <Box height="40vh" width="40vh" borderWidth="1px" marginTop="2rem">
      <Box position="relative">
        <Icon
          onClick={onClickHandler}
          as={FaHeart}
          w={8}
          h={8}
          color={`${isLiked ? "red.500" : "white"}`}
          position="absolute"
          right="2%"
          top="4%"
        />
        <Image height="20vh" width="100%" src={imgName}></Image>
      </Box>
      <Box marginLeft="1rem" marginTop="1rem">
        <Text fontSize="2rem" fontWeight="700">
          {props.title}
          <Text
            marginLeft="0.5rem"
            fontWeight="normal"
            fontSize="1rem"
            as="span"
          >
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
