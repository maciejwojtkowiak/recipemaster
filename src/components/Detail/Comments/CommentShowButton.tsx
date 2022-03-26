import { Box, Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const CommentShowButton = () => {
  const actualParams = useParams();
  const defineLink = `${actualParams.recipeid}/comments`;

  return (
    <Box>
      <Link to="comments">
        <Button
          marginTop="6rem"
          marginBottom="6rem"
          backgroundColor="orange.300"
          color="white"
          paddingX="2.2rem"
          paddingY="1.6rem"
          _hover={{
            backgroundColor: "orange.200",
          }}
        >
          Show Comments
        </Button>
      </Link>
    </Box>
  );
};

export default CommentShowButton;
