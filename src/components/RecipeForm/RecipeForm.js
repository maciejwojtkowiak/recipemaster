import {FormControl, Input, Center, Flex, Textarea, Button } from "@chakra-ui/react"
import React from "react"
import Navbar from "../Navbar"
import SelectType from "./SelectType"

const RecipeForm = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Center width="100%" height="95vh">
                <Flex justifyContent="center" alignItems="center" width="50vw">
                    <FormControl textAlign="center">
                        <Input placeholder="Name for your recipe" />
                        <SelectType />
                        <Textarea placeholder="Description" cols="20" rows="20" resize="none" />
                        <Button type="submit">Submit</Button>
                    </FormControl>
                </Flex>
            </Center>
        </React.Fragment>
        
    )
}

export default RecipeForm