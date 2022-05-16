import { Text, Box, Grid, Icon, Button, Flex } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import { IoMdHand } from "react-icons/io";
import ItemBox from "../UI/ItemBox";
import ItemDeleteButton from "../UI/ItemDeleteButton";

interface funcProps {
  stepName: string;
  stepId: string;
  stepIndex: number;
  onStepDelete: (id: number) => void;
}

const StepItem: React.FC<funcProps> = (props) => {
  const onStepRemove = (id: number) => {
    props.onStepDelete(id);
  };
  console.log(props.stepIndex);
  return (
    <Draggable draggableId={props.stepId} index={props.stepIndex}>
      {(provided) => (
        <Box
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          fontSize="1.2rem"
        >
          <ItemBox
            isIngredient={false}
            onRemove={onStepRemove}
            itemId={+props.stepId}
            itemName={props.stepName}
            itemNumber={props.stepIndex + 1}
          />
        </Box>
      )}
    </Draggable>
  );
};

export default StepItem;
