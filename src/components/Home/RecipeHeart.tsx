import { Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface funcProps {
  onLikeHandler: () => void;
  isLiked: boolean | undefined;
}

const RecipeHeart: React.FC<funcProps> = (props) => {
  const isLoggedIn = useSelector((state: RootState) => state.ui.isLoggedIn);
  console.log("isLoggedin");
  console.log(isLoggedIn);
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
