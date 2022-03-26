import { Textarea, Grid, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { recipeAction } from "../../../store/recipe-slice";

const CommentForm = () => {
  const detailParams = useParams();
  const recipeId = detailParams.recipeId;
  const dispatch = useDispatch();
  const [comment, setComment] = useState<string>("");
  const onCommentChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(e.target.value);
  };

  const onCommentAdd = () => {
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
    </Grid>
  );
};

export default CommentForm;
