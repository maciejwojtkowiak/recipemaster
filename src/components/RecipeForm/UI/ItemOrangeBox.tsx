import { Box } from "@chakra-ui/react";

const ItemOrangeBox: React.FC = (props) => {
  return (
    <Box bgGradient="linear(to-r, orange.300, orange.400)" bgColor="red.200">
      {props.children}
    </Box>
  );
};

export default ItemOrangeBox;
