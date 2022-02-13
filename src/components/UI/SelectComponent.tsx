import { Select } from "@chakra-ui/react";
import React from "react";

interface funcProp {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeHolder: string;
  values: string[];
}

const SelectComponent: React.FC<funcProp> = (props) => {
  return (
    <Select onChange={props.onChange}>
      {props.values.map((value) => {
        return <option>{value}</option>;
      })}
    </Select>
  );
};

export default SelectComponent;
