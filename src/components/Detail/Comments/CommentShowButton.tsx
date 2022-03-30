import { Box, Button } from "@chakra-ui/react";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../../store/ui-slice";
import { RootState } from "../../../store/store";

const CommentShowButton = () => {
  const dispatch = useDispatch();
  const params = useLocation().pathname;
  console.log(params);
  const formIsShown = useSelector(
    (state: RootState) => state.ui.commentFormIsShown
  );

  const onShowModal = () => {
    dispatch(uiAction.isCommentFormShown(true));
  };

  const commentsAreShown = params.includes("comments");
  return (
    <Box>
      <Link to={commentsAreShown ? "" : "comments"}>
        <Button
          marginTop="6rem"
          marginBottom="6rem"
          backgroundColor="orange.300"
          color="white"
          paddingX="2.2rem"
          paddingY="1.6rem"
          _hover={{
            backgroundColor: "orange.200",
          }}
        >
          {commentsAreShown ? "Hide comments" : "Show comments"}
        </Button>
      </Link>
      <Button
        marginTop="6rem"
        marginBottom="6rem"
        backgroundColor="orange.300"
        color="white"
        paddingX="2.2rem"
        paddingY="1.6rem"
        _hover={{
          backgroundColor: "orange.200",
        }}
        onClick={onShowModal}
      >
        Add Comment
      </Button>
    </Box>
  );
};

export default CommentShowButton;
