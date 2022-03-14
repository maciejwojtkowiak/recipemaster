import { Box } from "@chakra-ui/react";

const ItemBox: React.FC = (props) => {
  return <Box width="100%">{props.children}</Box>;
};

export default ItemBox;
