import { Textarea, Grid, Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { recipeAction } from "../../../store/recipe-slice";
import { RootState } from "../../../store/store";

const CommentForm = () => {
  const detailParams = useParams();
  const recipeId = detailParams.recipeid;
  const dispatch = useDispatch();
  console.log(recipeId);
  const [comment, setComment] = useState<string>("");
  const detailedRecipe = useSelector((state: RootState) =>
    state.recipe.recipes.find((recipe) => recipe.id === +recipeId!)
  );
  console.log(detailedRecipe);
  const commentList = detailedRecipe?.comments;
  const onCommentChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(e.target.value);
  };

  const onCommentAdd = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(recipeAction.addComment({ id: +recipeId!, comment: comment }));
  };
  return (
    <Grid width="60vw" placeItems="center">
      <form onSubmit={onCommentAdd}>
        <Textarea
          onChange={onCommentChangeHandler}
          w="30vw"
          h="25vh"
          resize="none"
          placeholder="Add your opinion"
        />
        <Button type="submit">Add</Button>
      </form>
      {commentList?.map((comment) => (
        <Box>{comment}</Box>
      ))}
    </Grid>
  );
};

export default CommentForm;
