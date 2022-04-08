import { Select } from "@chakra-ui/react";
import React from "react";

interface FuncProp {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeHolder: string;
  values: string[];
  typeOfSelect: string;
}

const SelectComponent: React.FC<FuncProp> = (props) => {
  return (
    <Select onChange={props.onChange}>
      <option value="" selected disabled hidden>
        Choose here {props.typeOfSelect}
      </option>
      {props.values.map((value) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectComponent;
