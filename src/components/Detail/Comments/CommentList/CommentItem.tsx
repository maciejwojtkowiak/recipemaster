import { Box } from "@chakra-ui/react";

interface funcProps {
  comment: string;
}

const CommentItem: React.FC<funcProps> = (props) => {
  return <Box>{props.comment}</Box>;
};

export default CommentItem;
