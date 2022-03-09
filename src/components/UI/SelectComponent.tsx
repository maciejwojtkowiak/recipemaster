import { Select } from "@chakra-ui/react";
import React from "react";

interface FuncProp {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeHolder: string;
  values: string[];
}

const SelectComponent: React.FC<FuncProp> = (props) => {
  return (
    <Select onChange={props.onChange}>
      {props.values.map((value) => {
        return <option value={value}>{value}</option>;
      })}
    </Select>
  );
};

export default SelectComponent;
