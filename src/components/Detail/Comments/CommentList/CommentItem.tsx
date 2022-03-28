import { Box } from "@chakra-ui/react";
import { Comment } from "../../../../shared/types/Recipe";

interface funcProps {
  comment: Comment;
}

const CommentItem: React.FC<funcProps> = (props) => {
  return (
    <Box>
      {props.comment.title}
      {props.comment.content}
    </Box>
  );
};

export default CommentItem;
