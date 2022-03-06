import { Heading } from "@chakra-ui/react";
interface funcProps {
  title: string;
}

const ColumnHeader: React.FC<funcProps> = (props) => {
  return <Heading textAlign="center">{props.title}</Heading>;
};

export default ColumnHeader;
