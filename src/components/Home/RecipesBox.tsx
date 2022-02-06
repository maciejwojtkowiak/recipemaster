import RecipesList from "./RecipesList"
import { Box } from "@chakra-ui/react"

const RecipesBox = () => {
    return (
        <Box h="100vh" w="100%" borderWidth="1px" borderColor="red.300">
            <RecipesList />
        </Box>
    )
}

export default RecipesBox