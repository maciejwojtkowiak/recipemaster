import { Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

interface funcProps {
  onLikeHandler: () => void;
  isLiked: boolean | undefined;
}

const RecipeHeart: React.FC<funcProps> = (props) => {
  return (
    <Icon
      onClick={props.onLikeHandler}
      as={FaHeart}
      w={8}
      h={8}
      color={`${props.isLiked ? "red.500" : "white"}`}
      position="absolute"
      right="2%"
      top="4%"
      transition="0.35s all"
      cursor="pointer"
      _hover={{ transform: "scale(1.1)" }}
    />
  );
};

export default RecipeHeart;
