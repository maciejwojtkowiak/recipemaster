import { Box, Image, Flex, Grid, Text } from "@chakra-ui/react";
import { Comment } from "../../../../shared/types/Recipe";
import defaultUser from "../../../../images/defaultUser.jpg";
import { useMediaQuery } from "@chakra-ui/react";

interface funcProps {
  comment: Comment;
}

const CommentItem: React.FC<funcProps> = (props) => {
  // podziel na dwie czesci, dla zdjecia i dla contentu
  const [isSmallDevice] = useMediaQuery("(max-width: 48em)");
  return (
    <Grid
      alignItems="center"
      templateColumns="25% 1fr"
      minWidth={isSmallDevice ? "90vw" : "40vw"}
      maxWidth={isSmallDevice ? "90vw" : "40vw"}
      minHeight="20vh"
      border="1px"
      borderColor="gray.300"
      marginY="1rem"
      paddingY="2rem"
    >
      <Grid placeItems="center" marginX="1rem">
        <Flex alignItems="center" flexDir="column">
          <Image boxSize="4rem" src={defaultUser} alt="" />
          <Text marginTop="1rem" fontWeight="700">
            {props.comment.user}
          </Text>
        </Flex>
      </Grid>
      <Grid minW="100%" maxW="100%" templateRows="max-content 1fr">
        <Text
          fontWeight="700"
          marginBottom="0.5rem"
          fontSize="1.6rem"
          maxW={isSmallDevice ? "50vw" : "30vw"}
        >
          {props.comment.title}
        </Text>
        <Text maxW={isSmallDevice ? "50vw" : "30vw"} fontFamily="Montserrat">
          {props.comment.content}
        </Text>
      </Grid>
    </Grid>
  );
};

export default CommentItem;
