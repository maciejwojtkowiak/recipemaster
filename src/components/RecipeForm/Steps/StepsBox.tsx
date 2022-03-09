import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import AddButton from "../../UI/AddButton";
import { recipeAction } from "../../../store/recipe-slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import React, { useState } from "react";

const StepsBox = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState<string>("");
  const onStepAddHandler = () => {};
  const onChangeStepNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStep(e.target.value);
  };

  return (
    <Box>
      <InputGroup>
        <Input onChange={onChangeStepNameChange} placeholder="Add a step" />
        <InputRightElement>
          <AddButton onClickHandler={onStepAddHandler} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default StepsBox;
