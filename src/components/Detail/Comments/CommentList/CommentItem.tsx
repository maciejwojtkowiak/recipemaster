import { Box, Image, Flex, Grid, Text } from "@chakra-ui/react";
import { Comment } from "../../../../shared/types/Recipe";
import defaultUser from "../../../../images/defaultUser.jpg";

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
      <Flex width="100%" height="100%" alignItems="center">
        <Grid placeItems="center" marginLeft="2rem">
          <Flex>
            <Grid placeItems="center">
              <Image boxSize="5rem" src={defaultUser} />
              <Text marginTop="1rem" fontWeight="700">
                {props.comment.user}
              </Text>
            </Grid>
            <Grid templateRows="max-content 1fr">
              <Text fontWeight="700" marginBottom="0.5rem">
                {props.comment.title}
              </Text>
              <Text marginLeft="0.5rem">{props.comment.content}</Text>
            </Grid>
          </Flex>
        </Grid>
      </Flex>
    </Box>
  );
};

export default CommentItem;
