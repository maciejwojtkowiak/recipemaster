import { Textarea, Grid, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { recipeAction } from "../../../store/recipe-slice";
import { RootState } from "../../../store/store";
import { uiAction } from "../../../store/ui-slice";
import Overlay from "../../UI/Overlay";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { auth } from "../../../Firebase";

const animation = {
  initialPosition: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.6,
    },
  },
  onShow: {
    transition: {
      duration: 0.6,
    },
    opacity: 1,
    y: 0,
  },

  onShowExit: {
    transition: {
      duration: 0.6,
    },
    opacity: 0,
    y: -100,
  },
};

const CommentForm = () => {
  const detailParams = useParams();
  const recipeId = detailParams.recipeid;
  const user = auth.currentUser;
  const formIsShown = useSelector(
    (state: RootState) => state.ui.commentFormIsShown
  );
  const detailedRecipe = useSelector((state: RootState) =>
    state.recipe.recipes.find((recipe) => recipe.id === +recipeId!)
  );

  const dispatch = useDispatch();
  const [commentContent, setCommentContent] = useState<string>("");
  const [commentTitle, setCommentTitle] = useState<string>("");

  const onCommentChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    setValue: (value: string) => void
  ) => {
    setValue(e.target.value);
  };

  const onCommentAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const comment = {
      title: commentTitle,
      content: commentContent,
      user: user?.displayName!,
    };

    dispatch(recipeAction.addComment({ id: +recipeId!, comment: comment }));
    dispatch(uiAction.isCommentFormShown(false));
    dispatch(
      uiAction.setNotification({
        message: "Comment was added",
        type: "comment",
        isShown: true,
      })
    );
  };

  const hideFormModal = () => {
    dispatch(uiAction.isCommentFormShown(false));
  };
  return createPortal(
    <React.Fragment>
      <AnimatePresence>
        {formIsShown && (
          <React.Fragment>
            <Overlay hideOverlay={hideFormModal} />
            <Grid
              placeItems="center"
              position="fixed"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="right"
            >
              <motion.div
                variants={animation}
                initial="initialPosition"
                animate="onShow"
                exit="onShowExit"
              >
                <form onSubmit={onCommentAdd}>
                  <Grid>
                    <Input
                      placeholder="Title"
                      onChange={(e) =>
                        onCommentChangeHandler(e, setCommentTitle)
                      }
                      bgColor="white"
                      borderEndRadius="0"
                    />
                    <Textarea
                      backgroundColor="white"
                      onChange={(e) =>
                        onCommentChangeHandler(e, setCommentContent)
                      }
                      w="30vw"
                      h="25vh"
                      resize="none"
                      placeholder="Add your opinion"
                      borderRadius="0"
                    />
                    <Button type="submit" borderRadius="0">
                      Add
                    </Button>
                  </Grid>
                </form>
              </motion.div>
            </Grid>
          </React.Fragment>
        )}
      </AnimatePresence>
    </React.Fragment>,
    document.getElementById("modal") as HTMLDivElement
  );
};

export default CommentForm;
