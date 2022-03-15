import ItemBox from "../UI/ItemBox";
import { Text } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

interface funcProps {
  stepName: string;
  stepId: string;
  stepIndex: number;
}

const StepItem: React.FC<funcProps> = (props) => {
  return (
    <ItemBox>
      <Draggable draggableId={props.stepId} index={props.stepIndex}>
        {(provided) => (
          <Text
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            textAlign="center"
            fontSize="1.2rem"
          >
            <Text marginRight="5rem" as="span">
              {props.stepIndex + 1}
            </Text>
            {props.stepName}
          </Text>
        )}
      </Draggable>
    </ItemBox>
  );
};

export default StepItem;
