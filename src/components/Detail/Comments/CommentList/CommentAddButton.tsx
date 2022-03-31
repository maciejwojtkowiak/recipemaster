import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../../store/ui-slice";
const CommentAddButton = () => {
  const dispatch = useDispatch();
  const onShowModal = () => {
    dispatch(uiAction.isCommentFormShown(true));
  };
  return (
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
  );
};

export default CommentAddButton;
