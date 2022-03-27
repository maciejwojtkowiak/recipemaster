import { Textarea, Grid, Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { recipeAction } from "../../../store/recipe-slice";
import { RootState } from "../../../store/store";
import { uiAction } from "../../../store/ui-slice";
import Overlay from "../../UI/Overlay";

const CommentForm = () => {
  const formIsShown = useSelector(
    (state: RootState) => state.ui.commentFormIsShown
  );
  const detailParams = useParams();
  const recipeId = detailParams.recipeid;
  const dispatch = useDispatch();
  const [comment, setComment] = useState<string>("");
  const detailedRecipe = useSelector((state: RootState) =>
    state.recipe.recipes.find((recipe) => recipe.id === +recipeId!)
  );
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

  const hideFormModal = () => {
    dispatch(uiAction.isCommentFormShown(false));
  };
  return (
    <React.Fragment>
      {formIsShown && (
        <Overlay>
          <Grid
            width="60vw"
            placeItems="center"
            position="fixed"
            zIndex="100"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <form onSubmit={onCommentAdd}>
              <Textarea
                backgroundColor="white"
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
        </Overlay>
      )}
    </React.Fragment>
  );
};

export default CommentForm;
