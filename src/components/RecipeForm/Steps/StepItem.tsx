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
    <Draggable draggableId={props.stepId} index={props.stepIndex}>
      {(provided) => (
        <Box
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          textAlign="center"
          fontSize="1.2rem"
        >
          <Box fontSize="1.2rem" textAlign="center" position="relative">
            <Box position="absolute">{props.stepIndex + 1}</Box>
            {props.stepName}
          </Box>
        </Box>
      )}
    </Draggable>
  );
};

export default StepItem;
