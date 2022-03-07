import { Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

interface funcProps {
  onClickHandler: () => void;
}

const AddButton: React.FC<funcProps> = (props) => {
  return (
    <Box>
      <Button
        type="submit"
        onClick={props.onClickHandler}
        bgGradient="linear(to-r, orange.300, orange.400)"
        color="white"
        justifySelf="center"
        _hover={{
          bgGradient: "linear(to-r, orange.200, orange.400)",
        }}
      >
        <AddIcon w={4} h={4} />
      </Button>
    </Box>
  );
};

export default AddButton;
