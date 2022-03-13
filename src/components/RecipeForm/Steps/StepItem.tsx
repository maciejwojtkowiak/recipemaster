import ItemBox from "../UI/ItemBox";
import { Text } from "@chakra-ui/react";

interface funcProps {
  step: string;
  stepNumber: number;
}

const StepItem: React.FC<funcProps> = (props) => {
  return (
    <ItemBox>
      <Text textAlign="center" fontSize="1.2rem">
        <Text marginRight="5rem" as="span">
          {props.stepNumber}
        </Text>
        {props.step}
      </Text>
    </ItemBox>
  );
};

export default StepItem;
