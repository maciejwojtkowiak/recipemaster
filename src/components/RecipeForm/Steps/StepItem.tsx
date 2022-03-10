import ItemBox from "../UI/ItemBox";
import { Text } from "@chakra-ui/react";

interface funcProps {
  step: string;
}

const StepItem: React.FC<funcProps> = (props) => {
  return (
    <ItemBox>
      <Text textAlign="center" fontSize="1.2rem">
        {props.step}
      </Text>
    </ItemBox>
  );
};

export default StepItem;
