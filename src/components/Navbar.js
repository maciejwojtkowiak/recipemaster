import { Link } from "react-router-dom"
import { Box, UnorderedList, ListItem, Flex, Spacer, Input } from "@chakra-ui/react"
const Navbar = () => {
    return (
        <Box h="10vh" bgGradient='linear(to-r, orange.200, orange.500)'>
            <UnorderedList height="100%"  styleType="none">
                <Flex height="100%" justifyContent="center" alignItems="center" >
                    <ListItem >Recipemaster</ListItem>
                    <Spacer />
                    <ListItem>
                        <Input width="30rem"  placeholder="Let`s find a recipe!" backgroundColor="white" focusBorderColor="orange.500" type="text" />
                    </ListItem>
                    <Spacer />
                    <Flex alignItems="center" height="100%" gap="2rem" color="white" fontSize="1.2rem" marginRight="2rem">
                        <ListItem><Link to='/addRecipe'>add recipe</Link></ListItem>
                        <ListItem>Profile</ListItem>
                        <ListItem>Logout</ListItem>
                    </Flex>
                    
                </Flex>
            </UnorderedList>
        </Box>
    )
}


export default Navbar