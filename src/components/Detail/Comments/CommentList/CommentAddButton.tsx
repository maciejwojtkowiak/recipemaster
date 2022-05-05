import { Button, Grid, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../../store/ui-slice";
import { auth } from "../../../../Firebase";
const CommentAddButton = () => {
  const dispatch = useDispatch();
  const user = auth.currentUser;
  const onShowModal = () => {
    if (!user) {
      dispatch(
        uiAction.setNotification({
          message: "You have to be logged in to add a comment",
          isShown: true,
          type: "message",
        })
      );
    }
    if (user) {
      dispatch(uiAction.isCommentFormShown(true));
    }
  };
  return (
    <Grid placeItems="center" marginTop="2rem">
      <Text
        fontFamily="dancingScriptFont"
        fontWeight="700"
        marginBottom="2rem"
        fontSize="3rem"
      >
        Add Comment
      </Text>
      <Button
        marginBottom="6rem"
        backgroundColor="orange.300"
        color="white"
        paddingX="2rem"
        paddingY="1.6rem"
        _hover={{
          backgroundColor: "orange.200",
        }}
        onClick={onShowModal}
        fontSize="2rem"
      >
        &#10010;
      </Button>
    </Grid>
  );
};

export default CommentAddButton;
