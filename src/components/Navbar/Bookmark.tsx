import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Button, Box, Text } from "@chakra-ui/react"
import {FiBookmark} from 'react-icons/fi'
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store/store"
import { recipeAction } from "../../store/recipe-slice"
import React from "react"

const Bookmark = () => {
    const dispatch = useDispatch()
    const likedItems = useSelector((state: RootState) => state.recipe.likedRecipes.recipes)
    const totalAmount = useSelector((state: RootState) => state.recipe.likedRecipes.totalAmount)
    const onDeleteHandler = (e: React.FormEvent, id: number) => {
        dispatch(recipeAction.deleteLikedRecipe(id))
    }

    return ( 
        <Box position="relative">
            <Menu>
            <Text 
            position="absolute" 
            top="0%" right="0%" 
            bg="white" borderRadius="50%" 
            fontSize="0.8rem" color="black"
            paddingLeft="0.4rem" 
            paddingRight="0.4rem"
            fontWeight="700"
            zIndex="10">
                {totalAmount}
            </Text>
            <MenuButton 
                background="none"
                as={IconButton}
                borderRadius='md'
                borderWidth='0px'
                _hover={{bg: "none"}}
                _expanded={{ bg: 'none' }}
                _focus={{ boxShadow: 'none' }}
                _active={{bg: 'none'}}
                icon={<Icon as={FiBookmark} w={8} h={8} />}
            />
            <MenuList>
                {likedItems.map(recipe => <Box key={recipe.id}><MenuItem>Elo<Button onClick={(e) => {onDeleteHandler(e, recipe.id)} }>X</Button></MenuItem></Box>)}
            </MenuList>

            
             </Menu>
        </Box>

    )
}

export default Bookmark