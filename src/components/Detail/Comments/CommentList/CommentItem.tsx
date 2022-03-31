import { Box, Image, Flex, Grid, Text } from "@chakra-ui/react";
import { Comment } from "../../../../shared/types/Recipe";
import defaultUser from "../../../../images/defaultUser.jpg";

interface funcProps {
  comment: Comment;
}

const CommentItem: React.FC<funcProps> = (props) => {
  return (
    <Flex
      alignItems="center"
      minWidth="40vw"
      minHeight="20vh"
      border="1px"
      borderColor="orange.400"
      marginTop="1rem"
      marginBottom="1rem"
      paddingTop="2rem"
      paddingBottom="2rem"
    >
      <Flex marginLeft="2rem">
        <Grid maxW="100%" placeItems="center" marginRight="2rem">
          <Flex alignItems="center" flexDir="column">
            <Image boxSize="5rem" src={defaultUser} />
            <Text marginTop="1rem" fontWeight="700">
              {props.comment.user}
            </Text>
          </Flex>
        </Grid>
        <Grid maxW="100%" templateRows="max-content 1fr">
          <Text fontWeight="700" marginBottom="0.5rem" fontSize="1.6rem">
            {props.comment.title}
          </Text>
          <Text maxW="30vw">{props.comment.content}</Text>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default CommentItem;
