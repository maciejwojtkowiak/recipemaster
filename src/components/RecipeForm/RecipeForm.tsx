import {FormControl, Input, Center, Flex, Textarea, Button } from "@chakra-ui/react"
import SelectType from "./SelectType"
import React from "react"
import { useState } from "react"
import Navbar from "../Navbar"
import { recipeAction } from "../../store/recipe-slice"
import { useDispatch } from "react-redux"
import { Recipe } from "../../shared/types/Recipe"

const COLS = 20
const ROWS = 20


const RecipeForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [description, setDescription] = useState<string>('')


    const onSubmitHandler = (e: React.FormEvent): void => {
        e.preventDefault()
        const recipe: Recipe = {
            title: title, 
            type: type, 
            description: description
        }

        dispatch(recipeAction.addRecipe(recipe))
        
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, setValue: Function): void => {
        const newValue = e.target.value;
        setValue(newValue)
        console.log(newValue)
     }

    return (
        <React.Fragment>
            <Navbar />
            <Center width="100%" height="95vh">
                <Flex justifyContent="center" alignItems="center" width="50vw">
                    <FormControl textAlign="center" onSubmit={onSubmitHandler}>
                        <Input onChange={(e) => onChangeHandler(e, setTitle)}  placeholder="Name for your recipe" />
                        <SelectType onChange={onChangeHandler} setType={setType} />
                        <Textarea onChange={(e) => onChangeHandler(e, setDescription)} placeholder="Description" cols={COLS} rows={ROWS} resize="none" />
                        <Button type="submit">Submit</Button>
                    </FormControl>
                </Flex>
            </Center>
        </React.Fragment>
        
    )
}

export default RecipeForm