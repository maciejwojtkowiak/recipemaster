import { Box, Flex, Input } from "@chakra-ui/react";
import AddButton from "../../UI/AddButton";
import React, { useState, useEffect } from "react";
import { Step } from "../../../shared/types/Recipe";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../store/ui-slice";

interface funcProps {
  onStepAdd: (step: Step) => void;
  onStepNameChange: (content: string, field: string) => void;
  stepIsWrong: boolean;
  stepName: string;
}

const StepsInput: React.FC<funcProps> = (props) => {
  const dispatch = useDispatch();
  const [stepInput, setStepInput] = useState<string>("");
  const [stepIsValid, setStepIsValid] = useState<boolean>(false);
  const [stepIsWrong, setStepIsWrong] = useState<boolean>(false);

  useEffect(() => {
    setStepIsValid(stepInput.length > 0 && stepInput.length < 51);
    if (stepIsValid) {
      setStepIsWrong(false);
    }
  }, [stepInput, stepIsValid]);
  const onStepNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepInput(e.target.value);

    props.onStepNameChange(e.target.name, e.target.value);
  };
  const onStepNameAdd = () => {
    if (stepIsValid) {
      props.onStepAdd({ name: props.stepName, id: Math.random() });
      setStepInput("");
    }
    if (!stepIsValid) {
      setStepIsWrong(true);

      dispatch(
        uiAction.setNotification({
          isShown: true,
          type: "error",
          message: `Step is wrong. ${
            stepInput.length === 0 ? "Input is empty" : "Input is too long"
          }`,
        })
      );
    }
  };

  const placeHolderContent = () => {
    if (props.stepIsWrong) {
      return " List must contain at least one item (Max length=50)";
    }
    if (stepIsWrong) {
      return "You added empty step! (Max length=50)";
    }
    return "Add a step (Max length=50)";
  };

  return (
    <Box>
      <Flex gap="1px">
        <Input
          name="step"
          value={stepInput}
          onChange={onStepNameChange}
          borderRadius="0"
          border="1px"
          placeholder={placeHolderContent()}
          bgColor={`${(props.stepIsWrong || stepIsWrong) && "#FED7D7"}`}
        />

        <AddButton onClickHandler={onStepNameAdd} />
      </Flex>
    </Box>
  );
};

export default StepsInput;
