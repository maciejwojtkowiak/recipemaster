import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Button, Box } from "@chakra-ui/react"
import {FiBookmark} from 'react-icons/fi'
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store/store"
import { recipeAction } from "../../store/recipe-slice"
import React from "react"

const Bookmark = () => {
    const dispatch = useDispatch()
    const likedItems = useSelector((state: RootState) => state.recipe.likedRecipes.recipes)
    const onDeleteHandler = (e: React.FormEvent, id: number) => {
        dispatch(recipeAction.deleteLikedRecipe(id))
    }

    return ( 
        <Menu>
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
                {likedItems.map(recipe => <Box key={recipe.id}><Button onClick={(e) => {onDeleteHandler(e, recipe.id)} }></Button><MenuItem onClick={(e) => {onDeleteHandler(e, recipe.id)}}>Elo</MenuItem></Box>)}
            </MenuList>

            
        </Menu>
    )
}

export default Bookmark