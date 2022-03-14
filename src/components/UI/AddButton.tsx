import { Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

interface funcProps {
  onClickHandler: () => void;
}

const AddButton: React.FC<funcProps> = (props) => {
  return (
    <Box>
      <Button
        onClick={props.onClickHandler}
        bgGradient="linear(to-r, orange.300, orange.400)"
        color="white"
        justifySelf="center"
        _hover={{
          bgGradient: "linear(to-r, orange.200, orange.400)",
        }}
        borderRadius="0"
      >
        <AddIcon />
      </Button>
    </Box>
  );
};

export default AddButton;
