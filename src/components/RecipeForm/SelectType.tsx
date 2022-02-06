import { Select } from "@chakra-ui/react"
import React from "react"

interface funcProp {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>, setValue: Function) => void
    setType: Function

}


const SelectType: React.FC<funcProp> = (props) => {
    return (
    <Select onChange={(e) => {props.onChange(e, props.setType)}}>
        <option selected disabled hidden>Choose type of your dish</option>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
        <option>Supper</option>
    </Select>
    )
}

export default SelectType