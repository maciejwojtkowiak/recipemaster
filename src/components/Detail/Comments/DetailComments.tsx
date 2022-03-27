import { Box } from "@chakra-ui/react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList/CommentList";

const DetailComments = () => {
  return (
    <Box>
      <CommentForm />
      <CommentList />
    </Box>
  );
};

export default DetailComments;
