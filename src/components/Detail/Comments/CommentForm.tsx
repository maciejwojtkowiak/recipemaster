import { Box, Input, Textarea, Grid } from "@chakra-ui/react";

const CommentForm = () => {
  return (
    <Grid width="60vw" placeItems="center">
      <Textarea
        w="30vw"
        h="20vh"
        resize="none"
        placeholder="Add your opinion"
      />
    </Grid>
  );
};

export default CommentForm;
