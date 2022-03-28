import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import CommentItem from "./CommentItem";

const CommentList = () => {
  const recipeId = useParams().recipeid;
  const detailedRecipe = useSelector((state: RootState) =>
    state.recipe.recipes.find((recipe) => recipe.id === +recipeId!)
  );
  return (
    <Box>
      {detailedRecipe?.comments?.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </Box>
  );
};

export default CommentList;
