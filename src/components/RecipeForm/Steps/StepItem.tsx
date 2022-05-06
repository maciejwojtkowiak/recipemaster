import { Text, Box, Grid, Icon, Button, Flex } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import { IoMdHand } from "react-icons/io";
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
  return (
    <Draggable draggableId={props.stepId} index={props.stepIndex}>
      {(provided) => (
        <Box
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
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
              left="0"
              top="50%"
              transform="translate(-0, -50%)"
            >
              <Text fontSize="1.6rem" color="white">
                {props.stepIndex + 1}
              </Text>
            </Grid>

            <Text fontSize="1.5rem">{props.stepName}</Text>

            <Grid
              position="absolute"
              left="96%"
              top="50%"
              transform="translate(0, -50%)"
            >
              <Flex>
                <Box>
                  <ItemDeleteButton
                    onRemove={onStepRemove}
                    itemId={+props.stepId}
                  />
                </Box>
              </Flex>
            </Grid>
          </Box>
        </Box>
      )}
    </Draggable>
  );
};

export default StepItem;
