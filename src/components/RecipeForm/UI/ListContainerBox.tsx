import { Box } from "@chakra-ui/react";

const ListContainerBox: React.FC = (props) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      padding="1rem"
      marginTop="1rem"
      marginBottom="1rem"
      textAlign="center"
    >
      {props.children}
    </Box>
  );
};

export default ListContainerBox;
