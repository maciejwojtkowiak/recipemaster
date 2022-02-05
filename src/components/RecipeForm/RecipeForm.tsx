import {FormControl, Input, Center, Flex, Textarea, Button } from "@chakra-ui/react"
import SelectType from "./SelectType"
import React from "react"
import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import { recipeAction } from "../../store/recipe-slice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { Recipe } from "../../shared/types/Recipe"

const COLS = 20
const ROWS = 20


const RecipeForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const items = useSelector((state: RootState) => state.recipe.recipes)
    


    const onSubmitHandler = (e: React.FormEvent): void => {
        e.preventDefault()
        console.log('submit')
        const recipe: Recipe = {
            title: title, 
            type: type, 
            description: description
        }

        console.log(title)

        dispatch(recipeAction.addRecipe(recipe))
        console.log(items)
        
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, setValue: Function): void => {
        const newValue = e.target.value;
        setValue(newValue)
     }

    return (
        <React.Fragment>
            <Navbar />
            <Center width="100%" height="95vh">
            <form onSubmit={onSubmitHandler}>
                <Flex justifyContent="center" alignItems="center" width="50vw">
                        <FormControl textAlign="center" >
                            <Input onChange={(e) => onChangeHandler(e, setTitle)}  placeholder="Name for your recipe" />
                            <SelectType onChange={onChangeHandler} setType={setType} />
                            <Textarea onChange={(e) => onChangeHandler(e, setDescription)} placeholder="Description" cols={COLS} rows={ROWS} resize="none" />
                            <Button type="submit">Submit</Button>
                        </FormControl>
                </Flex>
                </form>
            </Center>
        </React.Fragment>
        
    )
}

export default RecipeForm