import { Box, Button } from "@chakra-ui/react";

import { Link, useLocation } from "react-router-dom";

const CommentShowButton = () => {
  const params = useLocation().pathname;

  const commentsAreShown = params.includes("comments");
  return (
    <Box>
      <Link to={commentsAreShown ? "" : "comments"}>
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
          {commentsAreShown ? "Hide comments" : "Show comments"}
        </Button>
      </Link>
    </Box>
  );
};

export default CommentShowButton;
