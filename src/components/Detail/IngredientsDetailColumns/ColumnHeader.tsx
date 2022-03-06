import { Heading } from "@chakra-ui/react";
interface funcProps {
  title: string;
}

const ColumnHeader: React.FC<funcProps> = (props) => {
  return (
    <Heading fontSize="3rem" marginTop="2rem" textAlign="center">
      {props.title}
    </Heading>
  );
};

export default ColumnHeader;
