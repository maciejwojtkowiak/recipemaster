import { Box } from "@chakra-ui/react";
import CommentForm from "./CommentForm";
import CommentAddButton from "./CommentList/CommentAddButton";
import CommentList from "./CommentList/CommentList";

const DetailComments = () => {
  return (
    <Box>
      <CommentAddButton />
      <CommentForm />
      <CommentList />
    </Box>
  );
};

export default DetailComments;
