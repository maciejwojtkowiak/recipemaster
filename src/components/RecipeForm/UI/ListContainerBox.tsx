import { Box, Heading } from "@chakra-ui/react";

interface funcProps {
  title: string;
}

const ListContainerBox: React.FC<funcProps> = (props) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      padding="1rem"
      marginTop="1rem"
      marginBottom="1rem"
    >
      <Heading textAlign="center">{props.title}</Heading>
      {props.children}
    </Box>
  );
};

export default ListContainerBox;
