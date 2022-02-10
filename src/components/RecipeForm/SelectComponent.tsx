import { Select } from "@chakra-ui/react";
import React from "react";

interface funcProp {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeHolder: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5?: string;
}

const SelectComponent: React.FC<funcProp> = (props) => {
  return (
    <Select onChange={props.onChange}>
      <option> {props.placeHolder}</option>
      <option>{props.option1}</option>
      <option>{props.option2}</option>
      <option>{props.option3}</option>
      <option>{props.option4}</option>
    </Select>
  );
};

export default SelectComponent;
