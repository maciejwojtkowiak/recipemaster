import { Link } from "react-router-dom"
import { Box, UnorderedList, ListItem, Flex, Spacer, Input } from "@chakra-ui/react"
const Navbar = () => {
    return (
        <Box w="100%" h="10vh" bgGradient='linear(to-r, orange.200, orange.500)'>
            <UnorderedList height="100%" w="100%" styleType="none">
                <Flex height="100%" w="100%" justifyContent="center" alignItems="center" >
                    <ListItem >Recipemaster</ListItem>
                    <Spacer />
                    <ListItem>
                        <Input w="30rem" placeholder="Let`s find a recipe!" backgroundColor="white" focusBorderColor="orange.500" type="text" />
                    </ListItem>
                    <Spacer />
                    <Flex>
                        <ListItem><Link to='/profile'>add recipe</Link></ListItem>
                        <ListItem>Profile</ListItem>
                        <ListItem>Logout</ListItem>
                    </Flex>
                </Flex>
            </UnorderedList>
        </Box>
    )
}


export default Navbar