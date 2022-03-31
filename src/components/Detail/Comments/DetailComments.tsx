import { Box, Grid } from "@chakra-ui/react";
import CommentForm from "./CommentForm";
import CommentAddButton from "./CommentList/CommentAddButton";
import CommentList from "./CommentList/CommentList";

const DetailComments = () => {
  return (
    <Box
      fontFamily="handWriting"
      width="100%"
      borderTop="2px"
      borderColor="orange.300"
    >
      <Grid placeItems="center">
        <CommentAddButton />
        <CommentForm />
        <CommentList />
      </Grid>
    </Box>
  );
};

export default DetailComments;
