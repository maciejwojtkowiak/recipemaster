import {FormControl, Input, Center, Flex, Textarea, Button } from "@chakra-ui/react"
import SelectType from "./SelectType"
import React from "react"
import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import { recipeAction } from "../../store/recipe-slice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { Recipe } from "../../shared/types/Recipe"
import { sendData } from "../../store/recipe-action"
import { auth } from "../../Firebase"

const RecipeForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const user = auth.currentUser
    


    const onSubmitHandler = (e: React.FormEvent): void => {
        e.preventDefault()
        const recipe: Recipe = {
            user: user!,
            title: title, 
            type: type, 
            description: description,
            id: Math.random()
        }
        dispatch(recipeAction.addRecipe(recipe))
        dispatch(sendData(recipe))
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
                            <Textarea onChange={(e) => onChangeHandler(e, setDescription)} placeholder="Description" cols={20} rows={20} resize="none" />
                            <Button type="submit">Submit</Button>
                        </FormControl>
                </Flex>
                </form>
            </Center>
        </React.Fragment>
        
    )
}

export default RecipeForm