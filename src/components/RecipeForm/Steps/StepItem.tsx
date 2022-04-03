import { Text, Box, Grid } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

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
          <Box
            fontSize="1.2rem"
            textAlign="center"
            position="relative"
            marginY="1rem"
          >
            <Grid
              bgGradient="linear(to-r, orange.300, orange.400)"
              position="absolute"
              h="5vh"
              w="5vh"
              placeItems="center"
              borderRadius="0.2rem"
            >
              <Text fontSize="1.6rem" color="white">
                {props.stepIndex + 1}
              </Text>
            </Grid>
            <Text fontSize="1.5rem">{props.stepName}</Text>
          </Box>
        </Box>
      )}
    </Draggable>
  );
};

export default StepItem;
