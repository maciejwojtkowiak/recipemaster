import ItemBox from "../UI/ItemBox";
import { Text, Box } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import ItemOrangeBox from "../UI/ItemOrangeBox";

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
            <Text fontSize="1.2rem" textAlign="center" position="relative">
              <Box position="absolute">
                <ItemOrangeBox>{props.stepIndex + 1}</ItemOrangeBox>
              </Box>
              {props.stepName}
            </Text>
          </Text>
        )}
      </Draggable>
    </ItemBox>
  );
};

export default StepItem;
