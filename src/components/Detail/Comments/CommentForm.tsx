import { Textarea, Grid, Button } from "@chakra-ui/react";
import React, { useState } from "react";

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

  const onCommentChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(e.target.value);
  };

  const onCommentAdd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(comment);
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
              <Grid>
                <Textarea
                  backgroundColor="white"
                  onChange={onCommentChangeHandler}
                  w="30vw"
                  h="25vh"
                  resize="none"
                  placeholder="Add your opinion"
                  borderEndRadius="0"
                />
                <Button type="submit" borderRadius="0">
                  Add
                </Button>
              </Grid>
            </form>
          </Grid>
        </Overlay>
      )}
    </React.Fragment>
  );
};

export default CommentForm;
