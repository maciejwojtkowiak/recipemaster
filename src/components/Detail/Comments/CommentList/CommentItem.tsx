import { Box } from "@chakra-ui/react";
import { Comment } from "../../../../shared/types/Recipe";

interface funcProps {
  comment: Comment;
}

const CommentItem: React.FC<funcProps> = (props) => {
  return (
    <Box
      width="40vw"
      height="20vh"
      border="1px"
      borderColor="orange.400"
      marginTop="1rem"
    >
      {props.comment.title}
      {props.comment.content}
    </Box>
  );
};

export default CommentItem;
