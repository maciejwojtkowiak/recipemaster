import { Box, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../store/ui-slice";

const CommentShowButton = () => {
  const dispatch = useDispatch();

  const onShowModal = () => {
    dispatch(uiAction.isCommentFormShown(true));
  };
  return (
    <Box>
      <Link to="comments">
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
          Show Comments
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
